
const teclado = require ("prompt-sync") ();

let continuar = true;
let carinho = 0;

do {
    console.log(" CARRINHO DE VENDA:");
    console.log(" 1- Adicionar Produto no Carrinho");
    console.log(" 2- Remover Produto no Carrinho");
    console.log(" 3- Alterar a Quantidade de um Produto no Carrinho");
    console.log(" 4- Listar Produtos do Carrinho");
    console.log(" 5- Finalizar a Compra");
    console.log(" 6- Sair");

    let produto = teclado(" Digite o nome do produto: ");
    let opcao = Number(teclado(" Digite a opção: "));

    switch (opcao){
        case 1:{
            let nome = teclado("Digite nome do produto: ");
            let quantidade = Number(teclado("Digite a quantidade: "));
            let preco = Number(teclado(" Digite o preço do produto: "))
            adicionarProdutoCarrinho(nome, quantidade, preco);
            break;

        }
        case 2: {
            let nome = teclado ("Digite nome do produto a ser removido: ");
            removerProduto(nome);
            break;
        }
        case 3: {
            let nome = teclado("Digite nome do produto: ");
            let quantidade = Number(teclado("Digite quantidade de produto que deseja alterar: "));
            atualizarQuantidadeProdutoCarrinho(nome, quantidade);
            break;
        }
        case 4: {
            listarProdutosCarrinho();
            break;

        }
        case 5: {
            finalizarCompra();
            break;
        }
        case 6: {
            continuar = false;
        }
        default: {
            console.log("Opçao invalida!");
        }
            

    }

} while (continuar);

function adicionarProdutoCarrinho (nome, quantidade, preco) {

    let produto = {
        nome : nome,
        quantidade : quantidade,
        preco : preco
    };
    carinho.push(produto);
    console.log("produto" + nome+  "adicionado ao carrinho de compra");
}
function removerProduto(nome){
    let indice = 1;
    for ( let indiceProduto in carinho) {
        if (carinho [indiceProduto].nome === nome) {
            indice = indiceProduto;
        }
    }
    if (indice != 1) {
        carinho.splice(indice, 1);
        console.log("produto" + nome + "removidos no carrinho");
    } else {
        console.log("produto" +nome+ " nao encontrado no carrinho de compra");
    }
}
function atualizarQuantidadeProdutoCarrinho (nome, quantidade) {
    let indice = carinho.findIndex(produto => produto.nome === nome);
    if (indice != 1) {
        carinho[indice].quantidade = quantidade;
        console.log("atualizados as compra" +nome+ "no Carrinho das compras");
    }else {
        console.log("produto" +nome+ " nao encontrado no carrinho de compras");
    }
}
function listarProdutosCarrinho() {
    console.log("\n Carrinho de Compras");
    carinho.forEach(produto => console.log("produto" + produto.nome + "quantidade" + produto.quantidade+ "preço R$:" + Number(produto.preco).toFixed(2)));
       
}
function finalizarCompra () {
    let total = 0;
}