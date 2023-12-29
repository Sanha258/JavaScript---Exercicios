const teclado = require ("prompt-sync") ();

let listas = [];
let tamanho = Number(teclado("informe o tamanho de indice: "));
preencherArray();
imprimirElementosIndiceParesArray(listas);

function preencherArray () {
    for(let i = 0; i < tamanho; i++) {
        listas.push(Number(teclado(" Numero " + i + "[] :")));
    }
}
function imprimirElementosIndiceParesArray(listas) {
    for (let indice in listas) {
        if (listas[indice] % 2 === 0) {
            console.log(indice);
        }
    }

}