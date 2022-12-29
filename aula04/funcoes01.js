
function sayMyName(N){
console.log('O nome escolhido foi ' + N)
}
sayMyName('Anderson');
sayMyName('Renato');


/* Indo para outro exercício */


function incrementarValor(valor, juros){
    const valorAcrescimo = (juros/100) * valor;
    return valor + valorAcrescimo;
}
console.log((incrementarValor(80,10)));
console.log((incrementarValor(80,)));
console.log((incrementarValor(80,15)));