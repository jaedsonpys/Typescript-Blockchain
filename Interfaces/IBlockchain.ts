export interface IBlockchain {
    chain: any[];
    generateGenesis(): void;
    validateChain(): void;
    addBlock(transition: object): void;
}