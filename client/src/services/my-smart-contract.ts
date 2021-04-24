import Web3 from 'web3';
import { getConfig } from './config-provider';
import { getWeb3 } from './web3-factory';

export class MySmartContract {
  private _contract;
  private _web3: Web3;

  public constructor() {
    this._web3 = getWeb3();
    this._contract = new this._web3.eth.Contract(<any>ABI, Address);
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
const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"get","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"message","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"newMessage","type":"string"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const Address = '0xea35e277cbe30b695bc9061d79a53371f2811941';
