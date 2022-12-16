function escreverMeuNome(nome) {
    return 'Meu nome é ' + nome;
    // console.log('Meu nome é ' + nome);
}

// escreverMeuNome('Felipe');

function verificandoIdade(idade) {
    if (idade >= 18) {
        console.log(escreverMeuNome('Felipe ') + 'e sou de maior');
    } else {
        console.log(escreverMeuNome('Felipe ') + 'e sou de menor');
    }
}

verificandoIdade(10);

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

let preco = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(preco, 10));
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(preco, 15));
} else if (formaDePagamento === 3) {
    console.log(preco);
} else {
    console.log(aplicarJuros(preco, 10));
}
