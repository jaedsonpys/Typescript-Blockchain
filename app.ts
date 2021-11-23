import { Blockchain } from "./Classes/blockchain";

var teste:Blockchain = new Blockchain()

// Adicionando blocos a blockchain

teste.addBlock({sender: 'Jaedson', receiver: 'Pedro', value: 2340})
teste.addBlock({sender: 'Jaedson', receiver: 'Gabriel', value: 34011})
teste.addBlock({sender: 'Jaedson', receiver: 'Luiz', value: 34230})
teste.addBlock({sender: 'Jaedson', receiver: 'Arthur', value: 3420})
teste.addBlock({sender: 'Jaedson', receiver: 'Maria', value: 34900})
teste.addBlock({sender: 'Jaedson', receiver: 'Murilo', value: 3460})

teste.printChain()

/*
 * Aqui, iremos alterar uma transação de um bloco na corrente,
 * assim o bloco e toda blockchain seram invalidados.
*/

var fakeTransition:any = {sender: 'me', receiver: 'you', value: 3488984};
teste.chain[3].transitions = fakeTransition;

/**
 * Agora fazemos a validação de cada um dos blocos:
 * 
 * true: A corrente é válida
 * false: Um bloco foi alterado, corrente inválida
*/

var validateChain:boolean = teste.validateChain();
console.log(validateChain);