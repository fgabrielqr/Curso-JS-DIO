// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis, sendo elas:
// 1 - Preço de combustível;
// 2 - Gasto médio de combustível do carro por km;
// 3 - Distância a ser percorrida;

const valorGasolina = 5.8;
const consulmoPorKm = 10;
const distanciaPorKm = 45;

const valorTotal = (distanciaPorKm / consulmoPorKm) * valorGasolina;

console.log(valorTotal.toFixed(2));
