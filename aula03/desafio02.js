/* 
Faça um programa para calcular o valor de uma viagem:

1 - Preço do Etanol;
2 - Preço da Gasolina;
3 - O tipo de combustível que vai utilizar no seu carro;
4 - Gasto médio de Km rodados por Litro;
5 - Distância em Km da sua viagem.

Imprima no console o valor que será usado para realizar esta viagem.
*/

const valorGasolina = 4.49;
const valorEtanol = 3.89;
const kmLitroGasolina = 10;
const kmLitroEtanol = 8;
const distanciaViagemKm = 150;
const tipoCombustivel = 'Etanol';

const viagemEtanol = distanciaViagemKm / kmLitroEtanol;
const viagemGasolina = distanciaViagemKm / kmLitroGasolina;

if (tipoCombustivel === 'Gasolina'){
    const gastoEtanol = viagemEtanol * valorEtanol;
    console.log('Se colocar etanol, você vai gastar R$');
    console.log(gastoEtanol.toFixed(2));
} else {
    const gastoGasolina = viagemGasolina * valorGasolina;
    console.log('Se colocar gasolina, você vai gastar R$');
    console.log(gastoGasolina.toFixed(2));
}