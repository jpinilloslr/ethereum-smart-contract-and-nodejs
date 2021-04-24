import Web3 from 'web3';
import { getConfig } from './config-provider';

let _web3: Web3;

export const getWeb3 = (): Web3 => {
  if (!_web3) {
    _web3 = new Web3(getConfig().web3Provider);
  }
  return _web3;
};
