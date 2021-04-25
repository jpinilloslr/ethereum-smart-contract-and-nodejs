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

  public async getMessage(): Promise<string> {
    return await this._contract.methods.message().call();
  }

  public async updateMessage(text: string): Promise<void> {
    await this._contract.methods
      .update(text)
      .send({
        from: getConfig().accountAddress,
        gasPrice: this._web3.utils.toWei('10', 'gwei'),
        gasLimit: 96000,
      })
      .on('transactionHash', (hash: string) =>
        console.log(`Waiting for TXN: ${hash}`)
      );
  }
}

// prettier-ignore
const ABI = [{"inputs":[],"name":"message","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"value","type":"string"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}];
