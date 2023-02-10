var agentes = require('./Agentes');

function alfabetica(arrProdutos, posicaoInicial){
    var primeiro = posicaoInicial

    for(let inicial = posicaoInicial; inicial < arrProdutos.length; inicial++){
        if(arrProdutos[inicial].nome < arrProdutos[primeiro].nome){
            primeiro = inicial
        }
    }
    return primeiro;
}

module.exports = alfabetica;