const teste = require("./index")

let distancia = 1600
let tipoCombustivel = "gasolina"

test("Distancia é um número inteiro", () => {
    expect(Number.isInteger(distancia)).toBe(true);
  });

  test("Distancia maior que 0", () => {
    expect(distancia).toBeGreaterThanOrEqual(0);
  });

  test("Combustível é string", () => {
    expect(typeof tipoCombustivel === "string").toBe(true);
  });

  test("Combustível é etanol ou gasolina", () => {
    expect(tipoCombustivel == "gasolina" || tipoCombustivel == "etanol").toBe(true);
  });

  test("Resultado 100", () => {
    expect(teste.calculoCombustivel(distancia, tipoCombustivel)).toBe(100);
  });