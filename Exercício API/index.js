//Criar uma API de carros, onde seja possível localizar a lista geral, cada carro separadamente, adicionar, alterar ou remover um carro.

class Carro {
    constructor(marca, modelo, categoria, ano, quilometragem, valor) {
        this.Marca = marca;
        this.Modelo = modelo;
        this.Categoria = categoria;
        this.Ano = ano;
        this.Quilometragem = quilometragem;
        this.Valor = valor;
        }
}


function Get() {
    return fetch(`https://apigenerator.dronahq.com/api/FNGeMulr/Carros`)
      .then((response) => response.json())
      .then((data) => console.log(data));
}


function GetById(id) {
    return fetch(`https://apigenerator.dronahq.com/api/FNGeMulr/Carros/${id}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
}


async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
  
    return response.json();
}

const novoCarro1 = new Carro('Toyota', 'Corolla', 'Sedan', 2023, 0, 25000);
const novoCarro2 = new Carro('Honda', 'Civic', 'Sedan', 2023, 0, 28000);

postData('https://apigenerator.dronahq.com/api/FNGeMulr/Carros', novoCarro2)
.then((data) => {
    console.log(data);
});

async function deleteData(url = '') {
    const response = await fetch(url, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });
  
    return response.json();
  
}

/////// COPIAR ESSE CÓDIGO NO CONSOLE PARA DELETAR O OBJETO COM ID 1 /////
//deleteData('https://apigenerator.dronahq.com/api/FNGeMulr/Carros/1').then((data) => {console.log(data)})

//Alterando propriedades de um objeto
const updateCar = {
  "Marca": "BMW",
  "Modelo": "320i",
  "Categoria": "Sedan",
  "Ano": 2020,
  "Quilometragem": 0,
  "Valor": 200000
}

async function updateData(url = '', id, updateCar = {}) {

    const response = await fetch(`${url}/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(updateCar)
    });
  
    return response.json();
  
}

//COPIAR ESSE CÓDIGO NO CONSOLE PARA ALTERAR AS PROPRIEDADES DO OBJETO 3.
//UTILIZANDO AS NOVAS PROPRIEDADES CRIADAS EM updateCar

//updateData('https://apigenerator.dronahq.com/api/FNGeMulr/Carros', 3, updateCar).then((data) => {console.log(data)})