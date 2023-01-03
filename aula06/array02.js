

const notas = [];

notas.push(1);
notas.push(10);
notas.push(8);
notas.push(5.9);
notas.push(9);
notas.push(4);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const notaFinal = notas[i];
    soma = soma + notaFinal;
}


const media = soma / notas.length;
console.log(media);