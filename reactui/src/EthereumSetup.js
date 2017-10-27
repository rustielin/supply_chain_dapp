import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// application binary interface
var supplyABI = [];

// contract supply
var supplysupply = '';

// get the reference
const supplyContract = web3
    .eth
    .contract(supplyABI)
    .at(supplysupply);

// get what we need, and then export it as a variable
// TODO: probably best to load this into index.js and then add to global application state through redux
// Easy fix: write data directly to data.json folder in src/components/Application/data.json
var disp = {
    
}

export {supplyContract, disp};
