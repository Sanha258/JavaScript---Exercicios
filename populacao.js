const teclado = require ("prompt-sync") ();

let anos = 0;

let populacaoA = Number(teclado("Informe a população do país:"));
let taxaCrescimentoA = Number(teclado("Informe taxa de crescimento em Anos: "));

let populacaoB = Number(teclado("Informe a população do país:"));
let taxaCrescimentoB = Number(teclado("Informe taxa de crescimento em Anos: "));

if (populacaoA > populacaoB) {
    console.log("População do país A é maior que país B");

} else {
    if (taxaCrescimentoA < taxaCrescimentoB){
        console.log ("A taxa da população de país A é inferior a B, logo população de país A nunca será maior a país B");
    } else {
        while (populacaoA < populacaoB) {
            populacaoA += Math.floor(populacaoA * (taxaCrescimentoA/100));
            populacaoB += Math.floor(populacaoB * (taxaCrescimentoB/100));
            anos++;
        }
        console.log(" A população de país A levará: " + anos + " anos para superar a população do país B.")
    }
}

