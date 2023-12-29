const teclado = require ("prompt-sync") ();

let continuar = true;

do {
    console.log ("CALCULAR AS FIGURAS GEOMETRICAS:");
    console.log ("1 - QUADRADO");
    console.log ("2- RETANGULO");
    console.log ("3- CIRCULO");
    console.log ("4- TRIANGULO");
    console.log("5 - SAIR")

    let opcao = Number(teclado("digite uma opção:"));

    switch(opcao) {
        case 1:
            let lado = Number(teclado("digita o lado de quadrado:"));
            console.log("Area do quadrado é :" + (lado * lado));
            break;
        case 2:
            let base = Number(teclado("digite a base do retangulo:"));
            let altura = Number(teclado("digite a altura do retangulo:"));
            console.log("Area do retangulo é :" + (altura * base));
            break;
        case 3:
            let raio = Number(teclado("digite o raio do circulo:"));
            console.log("O raio do circulo é: " + (match.pi * raio**2));
            break;
        case 4:
            let base1 = Number(teclado("digite a base do triangulo: "));
            let altura1 = Number(teclado(" digite a alutura do triangulo: "));
            console.log ("Area do triangulo é: " + (base1 * altura/2).toFixed(2));
            break;
        case 5: {
            continuar = false;
            break;
        }
        default: {
            console.log("opção invalida!");
            break;
        }

    }

} while(continuar);