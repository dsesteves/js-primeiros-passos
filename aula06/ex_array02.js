// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

const numeros = [57, 62, 74, 51, 12, 25, 28, 22, 17, 13, 11, 6];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0){
        console.log(numero);
    }   
}
