
const precoEtiqueta = 480;
const formPag = 2;

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}

function main() {
    if (formPag === 1) {
        console.log(aplicarDesconto(precoEtiqueta, 10));
    } else if (formPag === 2) {
        console.log(aplicarDesconto(precoEtiqueta, 15));
    } else if (formPag === 3) {
        console.log(precoEtiqueta);
    } else {
        console.log(aplicarJuros(precoEtiqueta, 10));
    }
}

main();