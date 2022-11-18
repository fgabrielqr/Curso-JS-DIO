const precoEtanol = 4.5;
const precoGasolina = 5.8;
const tipoCombustivel = "gasolina";
const consumoPorKm = 10;
const distanciaPorKm = 45;

if (tipoCombustivel === "etanol") {
  const valorTotal = (distanciaPorKm / consumoPorKm) * precoEtanol;
  console.log(valorTotal.toFixed(2));
} else {
  const valorTotal = (distanciaPorKm / consumoPorKm) * precoGasolina;
  console.log(valorTotal.toFixed(2));
}
