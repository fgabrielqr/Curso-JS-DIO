// Exercício 01
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoMedioPorKm(distancia, precoCombustivel) {
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }
}

const Teste1 = new Carro("Fiat", "Azul", 2 / 15);
console.log(Teste1.calcularGastoMedioPorKm(70, 5));

const Teste2 = new Carro("Fiat", "Vermelho", 1 / 20);
console.log(Teste2.calcularGastoMedioPorKm(70, 5));

// Exercício 02
class IMC {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoDoIMC() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calculoDoIMC();

        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 25) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            return "Acima do peso";
        } else if (imc >= 30 && imc < 40) {
            return "Obeso";
        } else {
            return "Obesidade Grave";
        }
    }
}



const TesteIMC = new IMC("Felipe", 80, 1.71);
console.log(TesteIMC.classificarImc());





const dev = {
    nome: 'Renan',
    linguagemPreferida: 'JavaScript'
};

console.log(dev.linguagemPreferida);

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function descreverPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`);
}

const renan = new Pessoa('Renan', 30);
console.log(descreverPessoa(renan));