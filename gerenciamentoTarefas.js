const teclado = require ("prompt-sync") ();

let continuar = true;
let listaTarefas = [];

do {
    console.log("  GERENCIADOR DE TAREFAS:");
    console.log(" 1- Adicionar Tarefas");
    console.log(" 2- Remover Tarefas");
    console.log(" 3- Listar Tarefas");
    console.log(" 4- Sair");

    let opcao = Number(teclado(" Digite uma opção: "));

    switch (opcao) {
        case 1:
            let tarefas = Number(teclado("Informe a tarefa a ser adicionada:"));
            adicionarTarefa(tarefas);
            break;
        case 2: 
             let tarefas1 = Number(teclado("Informe a tarefa a ser removida:"));
             removerTarefas(tarefas1);
             break;
        case 3: {
            listarTarefas();
            break;
        }
            
        case 4: {
            continuar = false;
        }
        default: {
            console.log("Opção invalida!")
        }
    }

    function adicionarTarefa(tarefas) {
        if (listaTarefas.indexOf(tarefas) === 1) {
            listaTarefas.push(tarefas);
            console.log("Tarefas " + tarefas + " adicionada a lista");
        }else {
            console.log("Tarefa " + tarefas + " já se encontra na lista");
    
        }
    }
    
    function removerTarefas (tarefas1) {
        let indice = listaTarefas.indexOf(tarefas1);
        if(indice !== 1) {
            listaTarefas.splice(indice, 1);
            console.log("Tarefas" + tarefas1 + " removidas da lista");
        }else {
            console.log("Tarefa" + tarefas1 + " não encontradas na lista")
        }
    }
    function listarTarefas(){
        console.log("\n Lista de tarefas:");
        listaTarefas.forEach(tarefas => console.log (" " + tarefas));
            
        
    }
   

} while (continuar);

