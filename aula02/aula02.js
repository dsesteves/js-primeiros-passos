

const numero = 55;

const eNumero = (numero % 2) === 0;


if(numero === 0){
 console.log("Não é fruta")
} else if (numero === 5) {
 console.log('Maçã')
} else if (eNumero) {
    console.log('Abacaxi')  
} else {
    console.log('Cereja')  
}