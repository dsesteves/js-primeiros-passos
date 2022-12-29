/* 
Faça um programa para calcular o valor de combustível gasto em um viagem.

Você terá 3(três) variáveis, sendo elas:
 1 - Preço do combustível (em reais) ;
 2 - Valor médio de combustível gasto por Km;
 3 - Distância em Km da viagem;

Imprima no console o valor (em reais) de combustível que será gasto para realizar uma viagem.
*/

const precoCombustivel = 4.37;
const kmLitro = 9.35;
const distanciaKm = 162;

const litrosUsados = distanciaKm / kmLitro;
const valorGasto = litrosUsados * precoCombustivel;

console.log(valorGasto.toFixed(2));