#!/usr/bin/env node
require('dotenv').config({ path: '../.env' });
import { getConfig } from './services/config-provider';
import { MySmartContract } from './services/my-smart-contract';
import { getWeb3 } from './services/web3-factory';

const run = async () => {
  const contract = new MySmartContract();
  const startBalance = await getCurrentBalance();
  await printCurrentBalance();
  await readFromContract(contract);
  await writeToContract(contract);
  await readFromContract(contract);
  await printCurrentBalance();
  const finalBalance = await getCurrentBalance();
  console.log(`${startBalance - finalBalance} ETH spent`);
  process.exit();
};

const printCurrentBalance = async () => {
  const etherBalance = await getCurrentBalance();
  console.log(`Balance: ${etherBalance} ETH`);
};

const getCurrentBalance = async () => {
  const web3 = getWeb3();
  const balance = await web3.eth.getBalance(getConfig().accountAddress);
  const etherBalance = web3.utils.fromWei(balance, 'ether');
  return parseFloat(etherBalance);
};

const readFromContract = async (contract: MySmartContract) => {
  console.log('Reading from smart contract');
  const msg = await contract.get();
  console.log(`Current value: ${msg}`);
};

const writeToContract = async (contract: MySmartContract) => {
  console.log('Writing to smart contract');
  await contract.set(`Hi, today is ${new Date().toString()}`);
};

run()
  .then(() => true)
  .catch((e) => console.error(e));
