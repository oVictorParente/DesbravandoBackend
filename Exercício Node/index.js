function calculoCombustivel(distancia, tipoCombustivel) {

    if(tipoCombustivel == "gasolina") {
        litros = distancia / 16;
    } else if(tipoCombustivel == "etanol") {
        litros = distancia / 11;
    } else {
        return null;
    }

    return parseInt(litros);
}

module.exports = {calculoCombustivel}