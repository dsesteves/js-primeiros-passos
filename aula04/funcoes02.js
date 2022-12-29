
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
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

(function (){
    const peso = 51;
    const altura = 1.57;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();







