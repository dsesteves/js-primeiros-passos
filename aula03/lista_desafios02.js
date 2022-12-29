/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 
    Formula do IMC:

    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
    IMC em adultos Condição:

    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

const pesoKg = 45;
const altura = 1.57;
const imc = pesoKg / Math.pow(altura, 2);

console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (18.5 <= imc && imc < 25) {
    console.log('Peso Normal');
} else if (25 <= imc && imc < 30) {
    console.log('Acima do Peso');
} else if (30 <= imc && imc < 40) {
    console.log('Obeso');
} else {
    console.log('Gordura Humana!');
}