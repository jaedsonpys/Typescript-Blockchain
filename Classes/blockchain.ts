import { Block } from './block';
import { IBlockchain } from "../Interfaces/IBlockchain";

export class Blockchain implements IBlockchain {
    chain: any[] = [];

    constructor() {
        this.generateGenesis()
    }
    
    public generateGenesis(): void {
        let block:Block = new Block({}, '0')
        this.chain.push(block)
    }

    public addBlock(transition: object): void {
        let previousHash:any = this.chain[this.chain.length -1].hash
        let block:Block = new Block(transition, previousHash)
        
        this.chain.push(block)
    }

    public validateChain(): boolean {
        var i:number = 1;
        for(i; i < this.chain.length; i++) {
            let currentBlock:any = this.chain[i];
            let previousHash:any = this.chain[i-1];

            if (currentBlock.hash !== currentBlock.generateHash()) {
                console.log('Bloco inválido: ' + i);
                return false;
            }

            if (previousHash.hash !== previousHash.generateHash()) {
                console.log('Bloco inválido: ' + i);
                return false;
            }
        }
        return true;
    }

    public printChain(): void {
        this.chain.forEach(object => {
            console.log(`Hash: ${object.hash}`)
            console.log(`Previous Hash: ${object.previousHash}`)
            console.log(`Timestamp: ${object.timestamp}`)
            console.log(`Transação: ${object.transitions}`)
            console.log('')
        })
    }
}