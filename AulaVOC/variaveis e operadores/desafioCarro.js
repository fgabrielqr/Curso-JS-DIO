const valorGasolina = 5.8;
const consulmoPorKm = 10;
const distanciaPorKm = 45;

const valorTotal = (distanciaPorKm / consulmoPorKm) * valorGasolina;

console.log(valorTotal.toFixed(2));
