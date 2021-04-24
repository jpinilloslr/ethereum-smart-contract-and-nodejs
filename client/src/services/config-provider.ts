import Web3 from 'web3';
const HDWalletProvider = require('@truffle/hdwallet-provider');

export const getConfig = (): ConfigProvider => {
  return new ConfigProvider();
};

export class ConfigProvider {
  private _providerBuilders: { [name: string]: () => any } = {
    ganache: () => new Web3.providers.HttpProvider('http://127.0.0.1:7545'),
    ropsten: () =>
      new HDWalletProvider({
        privateKeys: [getConfig().privateKey],
        providerOrUrl: getConfig().rpcUrl,
      }),
  };

  public get rpcUrl(): string {
    return this._getEnvVariable('RPC_URL');
  }

  public get privateKey(): string {
    return this._getEnvVariable('PRIVATE_KEY');
  }

  public get accountAddress(): string {
    return this._getEnvVariable('ACCOUNT_ADDRESS');
  }

  public get providerName(): string {
    return this._getEnvVariable('PROVIDER_NAME');
  }

  public get contractAddress(): string {
    return this._getEnvVariable('CONTRACT_ADDRESS');
  }

  public get web3Provider(): any {
    const providerName = this.providerName;
    if (!this._providerBuilders[providerName]) {
      throw new Error(`Unknown provider name ${providerName}`);
    }
    return this._providerBuilders[providerName]();
  }

  private _getEnvVariable(name: string): string {
    const value = process.env[name];
    if (!value) {
      throw new Error(`Missing "${name}" environment variable`);
    }
    return value;
  }
}
