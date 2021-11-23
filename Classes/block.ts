var sha256 = require('crypto-js/sha256');
var hmacSHA = require('crypto-js/hmac-sha256')
var hexDigest = require('crypto-js/enc-hex')

import { IBlock } from "../Interfaces/Iblock";

export class Block implements IBlock {
    nonce: string;
    hash: string;
    previousHash: string;
    transitions: string;
    timestamp: number;

    constructor(transitions: object, previousHash: string) {
        this.previousHash = previousHash;
        this.nonce = '0';
        this.transitions = JSON.stringify(transitions);
        this.timestamp = new Date().getTime();

        let generateHash:string = this.generateHash()
        this.hash = generateHash;
    }

    public generateHash(): string {
        let blockContent:string = this.nonce + this.previousHash + this.transitions + this.timestamp.toString();
        let hash = hexDigest.stringify(sha256(blockContent));

        return hash
    }
}