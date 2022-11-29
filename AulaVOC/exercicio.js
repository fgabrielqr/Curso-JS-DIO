// 1- Faça um algoritimo que dado as 3 notas de um aluno calcule a média dele e mostre se ele foi aprovado ou não.

// Média = (nota1 + nota2 + nota3) / 3

// Classificação:
// - Média menor que 5.0: Reprovado;
// - Média entre 5 e 7.0: Recuperação;
// - Média maior ou igual a 7.0: Aprovado;

const nota1 = 5;
const nota2 = 4;
const nota3 = 3;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log("Reprovado");
} else if (media >= 5 && media < 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}

// 2- O IMC - Indice de Masssa Corporal é um critério da Organização Mundial de Saúde para dar um "diagnostico" da condição de peso de uma pessoa adulta.

// A fórmula é IMC = peso / (altura * altura).

// Faça um algoritimo que leia o peso e a altura de uma pessoa e mostre sua classificação de acordo com a tabela abaixo:

// IMC em adultos Condição:
// Abaixo de 18,5 Abaixo do peso;
// Entre 18,5 e 25 Peso normal;
// Entre 25 e 30 Acima do peso;
// Entre 30 e 40 Obeso;
// Acima de 40 Obesidade graus Grave;

let peso = 81;
let altura = 1.71;
const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima do peso");
} else if (imc >= 30 && imc < 40) {
  console.log("Obeso");
} else {
  console.log("Obesidade Grave");
}

// 3- Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
// Utilize os códigos da tabela a seguir para ler qual a condição de pagemnto escolhida e efetuar o cálculo adquado.

// Código condição de pagamento:
// 1- À vista débido, recebe 10% de desconto;
// 2- À vista no dinheiro ou pix, recebe 15% de desconto;
// 3- Em duas vezes, preço normal de etiqueta sem juros;
// 4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

let preco = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
  console.log(preco - (preco * 0.1));
} else if (formaDePagamento === 2) {
  console.log(preco - (preco * 0.15));
} else if (formaDePagamento === 3) {
  console.log(preco);
} else {
  console.log(preco + (preco * 0.10));
}
