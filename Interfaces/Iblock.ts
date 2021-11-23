export interface IBlock {
    nonce: string;
    previousHash: string;
    hash: string;
    transitions: string;
    timestamp: number;

    generateHash(): string;
}