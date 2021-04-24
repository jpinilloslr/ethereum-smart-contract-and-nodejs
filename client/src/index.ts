#!/usr/bin/env node
require('dotenv').config({ path: '../.env' });
import { MySmartContract } from './services/my-smart-contract';

const run = async () => {
  const contract = new MySmartContract();
  const msg = await contract.get();
  console.log(msg);
};

run()
  .then(() => true)
  .catch((e) => console.error(e));
