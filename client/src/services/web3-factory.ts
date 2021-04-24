import Web3 from 'web3';
import { getConfig } from './config-provider';

export const getWeb3 = (): Web3 => {
  return new Web3(getConfig().web3Provider);
};
