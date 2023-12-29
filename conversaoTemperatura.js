const teclado = require ("prompt-sync") ();

let continuar = true;

do {
    console.log ("CONVERSÃO DE TEMPERAÇÃO: ");
    console.log ("1 - Celsius para Fahrenheit ");
    console.log ("2 - Celsius para Kelvin ");
    console.log ("3 - Fahrenheit para Celsius ");
    console.log ("4 - Kelvin para Celsius ");
    console.log ("5 - Fahrenheit para Kelvin ");
    console.log ("6 - Kelvin para Fahrenheit ");
    console.log ("7 - Sair");

    let opcao = Number(teclado("digite a opção de conversão:"))

    switch(opcao){
        case 1:
            let celsius = (Number(teclado("informe a temperatura em Celsius:")));
            console.log ("temperatura em celsius é: " + (celsius + 273.23).toFixed(2));
            break;
        case 2:
            let Celsiusk = (Number(teclado("informe a temperatura em Celsius:")));
            console.log ("temperatura em celsius é: " + (Celsiusk + 273.15));
            break;
        case 3:
            let Fahrenheit = (Number(teclado("informe a temperatura em Fahrenheit:")));
            console.log ("temperatura em Fahrenheit é: " + ((Fahrenheit - 32)* (5/3)).toFixed(2));
            break;
        case 4:
            let Kelvin = (Number(teclado("informe a temperatura em Kelvin:")));
            console.log ("temperatura em Kelvin é: " + (Kelvin - 273.15).toFixed(2));
            break;
        case 5:
            let Fahrenheitk = (Number(teclado("informe a temperatura em Fahrenheit:")));
            console.log ("temperatura em Fahrenheit é: " + (((Fahrenheitk - 32) * (5/9) + 273.23)).toFixed(2));
            break;
        case 6:
            let KelvinF = (Number(teclado("informe a temperatura em Kelvin:")));
            console.log ("temperatura em Kelvin é: " + (((KelvinF - 273.23) * (9/5) + 32)).toFixed(2));
            break;
        case 7: {
            continuar= false;
            break;
        }
        default: {
            console.log("OPÇÃO INVALIDA!");
        }


    }


}while(continuar);




