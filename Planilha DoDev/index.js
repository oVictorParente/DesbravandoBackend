const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciais = require ('./credentials.json');
const arquivo = require('./arquivo.json');
const { JWT } = require('google-auth-library');

const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets'
];

const jwt = new JWT({
    email: credenciais.client_email,
    key: credenciais.private_key,
    scopes: SCOPES,
});

//Função para criar um novo objeto e carregar suas informações
async function GetDoc() {
    const novoArquivo = new GoogleSpreadsheet(arquivo.id, jwt);

    await novoArquivo.loadInfo();

    return novoArquivo;
}

//Função para ler a planilha, colher suas informações e criar uma lista de objetos com as informações obtidas.
//Essa função retorna a lista criada com as informações obtidas.
async function ReadWorkSheet() {
    let sheet = (await GetDoc()).sheetsByIndex[0];

    let rows = await sheet.getRows();

    let users = rows.map(row => {
        return row.toObject()
    });

    return users;
}

//Função de método "POST" para subir as informações obtidas para uma API criada no dronahq
async function AddUser(data={}) {

    try {
    const response = await fetch("https://apigenerator.dronahq.com/api/9tyGgkdm/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if(!response.ok) {
        throw new Error(`Erro ao enviar dados para a API. Código de resposta: ${response.status}`);
    }

    return response.json();
    } catch (error) {
        console.error('Erro ao adicionar usuário:', error.message);
        throw error;
    }
}

//Função que executa todas as outras funções criadas anteriormente.
async function TrackData() {

    try {
    let data = await ReadWorkSheet();

    await Promise.all(data.map(async (user) => {
        let response = await AddUser(user)
        console.log(response)
    }));

    return console.log("Dados copiados com sucesso!");
    
    } catch (error) {
        console.error('Erro durante o rastreamento de dados:', error.message);
    }
}

//Chamando a função TrackData() para que ela seja executada no Terminal, usando o comando (node [nome do arquivo].js)
TrackData();