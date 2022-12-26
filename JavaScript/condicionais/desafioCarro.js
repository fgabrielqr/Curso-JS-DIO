// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis, sendo elas:
// 1 - Tipo de combustível;
// 2 - Gasto médio de combustível do carro por km;
// 3 - Distância a ser percorrida;
// 4 - Preço da Gasolina;
// 5 - Preço do Etanol;

const precoEtanol = 4.5;
const precoGasolina = 5.35;
const tipoCombustivel = "gasolina";
const consumoPorKm = 10;
const distanciaPorKm = 195;

if (tipoCombustivel === "gasolina") {
  const valorTotal = (distanciaPorKm / consumoPorKm) * precoEtanol;
  console.log(valorTotal.toFixed(2));
} else {
  const valorTotal = (distanciaPorKm / consumoPorKm) * precoGasolina;
  console.log(valorTotal.toFixed(2));
}
