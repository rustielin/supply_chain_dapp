import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// application binary interface
var supplyABI = [];

// contract address
var supplyAddress = '';

// get the reference
const supplyContract = web3
    .eth
    .contract(supplyABI)
    .at(supplyAddress);

// get what we need, and then export it as a variable
// TODO: probably best to load this into index.js and then add to global application state through redux
var disp = {
    
}

export {supplyContract, disp};
