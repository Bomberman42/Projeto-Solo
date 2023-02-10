var agentes = require('./Agentes');
var ordenacao = require('./ordenacao');


for(var atual = 0; atual < agentes.length -1; atual++){
    var ordem = ordenacao(agentes, "nome", atual)

    var agenteAtual = agentes[atual];
    var segundoAgente = agentes[ordem];

    agentes[atual] = segundoAgente
    agentes[ordem] = agenteAtual
}

console.log(agentes)