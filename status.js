var agentes = require('./Agentes');

var operante = "Operante"
var quantidadeDeAgentesOperantes = 0
var morto = "Morto"
var quantidadeDeAgentesMortos = 0
var desconhecido = "Desconhecido"
var quantidadeDeAgentesDesconhecidos = 0

for(let index = 0; index < agentes.length; index++){
    
    if(agentes[index].status==operante){
        quantidadeDeAgentesOperantes=quantidadeDeAgentesOperantes+1
    }

    if(agentes[index].status==morto){
        quantidadeDeAgentesMortos=quantidadeDeAgentesMortos+1
    }

    if(agentes[index].status==desconhecido){
        quantidadeDeAgentesDesconhecidos=quantidadeDeAgentesDesconhecidos+1
    }
}

console.log("O total de agente(s) operante(s) é de:",quantidadeDeAgentesOperantes,"agente(s).")
console.log("O total de agente(s) morto(s) é de:",quantidadeDeAgentesMortos,"agente(s).")
console.log("O total de agente(s) desconhecido(s) é de:",quantidadeDeAgentesDesconhecidos,"agente(s).")