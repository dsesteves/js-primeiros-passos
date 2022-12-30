/*

2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.

As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));

Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;

*/

class Individuo {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'Abaixo do Peso';
        } else if (18.5 <= imc && imc < 25) {
            return 'Peso Normal';
        } else if (25 <= imc && imc < 30) {
            return 'Acima do Peso';
        } else if (30 <= imc && imc < 40) {
            return 'Obeso!';
        } else {
            return 'Obesidade Grave';
        }
    }
}

new Individuo('José', 83, 1.75);


/*const mary = new Individuo ('Maria', 38, 1.57);
const dijest = new Individuo ('Diego', 118, 1.83);
console.log(jose.classificarImc());
console.log(mary.classificarImc());
console.log(dijest.classificarImc());*/