/*

1) Crie uma classe para representar carros. 

Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.

Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

*/

/*Podemos usar:
console.log(corsa, tempra);
corsa.descrever();
tempra.descrever();
*/

class Carro {
    marca;
    modelo;
    cor;
    gastoKmL;

    constructor(marca, modelo, cor, gastoKmL){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.gastoKmL = gastoKmL;
    }

    descrever() {
    console.log(`O meu carro é da Marca ${this.marca}, Modelo ${this.modelo}, da cor ${this.cor} e faz ${this.gastoKmL.toFixed(2)} Km por Litro.`);
    }

    calcularGastoEmKm(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoKmL * precoCombustivel;
    }
}

const corsa = new Carro ("Chevrolet", "Corsa", "Branco", 1/13);
const tempra = new Carro ("Fiat", "Tempra", "Vermelho Vinho", 1/7);

console.log(corsa.calcularGastoEmKm(84.6, 5));
console.log(tempra.calcularGastoEmKm(84.6, 5));