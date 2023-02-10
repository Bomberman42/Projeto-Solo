function ordenacao(lista, campo, posicaoInicial){
    var primeiro = posicaoInicial

    for(let inicial = posicaoInicial; inicial < lista.length; inicial++){
        if(lista[inicial][campo] < lista[primeiro][campo]){
            primeiro = inicial
        }
    }
    return primeiro;
}

module.exports = ordenacao;