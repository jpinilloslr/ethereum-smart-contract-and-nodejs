const MySmartContract = artifacts.require('MySmartContract');

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(MySmartContract);
  await MySmartContract.deployed();
};
