# Ethereum smart contract and NodeJS client

## Configuration

Set your own config using `.env.example` file as reference.

## Install dependencies

```bash
$ cd ./smart-contracts
$ npm install
$ cd ../client
$ npm install
```

## Compile smart contract

```bash
$ cd ./smart-contractstru
$ npm install
$ npm run compile
```

## Deploy smart contract to Ganache

```bash
$ cd ./smart-contracts
$ npm run migrate
```

## Deploy smart contract to Ropsten Network

```bash
$ cd ./smart-contracts
$ npm run migrate:ropsten
```

## Run NodeJS client

Update your `.env` file with the address of the deployed contract.

```bash
$ cd ./client
$ npm run build
$ node ./bin
```
