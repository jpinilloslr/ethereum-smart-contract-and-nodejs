import Web3 from 'web3';
import { getConfig } from './config-provider';
import { getWeb3 } from './web3-factory';

export class MySmartContract {
  private _contract;
  private _web3: Web3;

  public constructor() {
    this._web3 = getWeb3();
    this._contract = new this._web3.eth.Contract(
      <any>ABI,
      getConfig().contractAddress
    );
  }

  public async get(): Promise<string> {
    return await this._contract.methods.get().call();
  }

  public async set(text: string): Promise<string> {
    return await this._contract.methods.set().call(text, {
      from: getConfig().accountAddress,
      gas: 1000000,
      value: this._web3.utils.toWei('59', 'gwei'),
    });
  }
}

// prettier-ignore
const ABI = [
  {
    "inputs": [],
    "name": "last_completed_migration",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "completed",
        "type": "uint256"
      }
    ],
    "name": "setCompleted",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
