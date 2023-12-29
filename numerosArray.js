const teclado = require ("prompt-sync") ();

let listas = [];

preencherArray(listas);
console.log(calcularTotal(listas));
imprimirImpares();

function preencherArray(listas){
    while (listas.lenght < 10) {
        listas.push(Number(teclado(" Numero " + listas.lenght + " : ")));

    }
}
function calcularTotal(listas) {
    let total = 0;
    for (let elemento of listas) {
        total += elemento;
    }
    return total;

}
function imprimirImpares() {
    for (let elemento of listas) {
        if(elemento % 2 != 0) {
            console.log(elemento);
        }
    }
}
