//Exercicio 01 

const numero = 8;

for (let i = 0; i <= 10; i++) {
    console.log("8 x", i * numero);
}

//Exercicio 02

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    const n = numeros[i];

    if (n % 2 === 0) {
        console.log("É par: ", n);
    }
}


// const numerosPares = [];

// for (let i = 0; i < 10; i++) {
//     const numeroPar = i % 2 === 0;
//     if (numeroPar) {
//         numerosPares.push(i);
//     }
// }

// console.log(numerosPares);


const numerosPares = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosPares.push(i);
}

console.log(numerosPares);