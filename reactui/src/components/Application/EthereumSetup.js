import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));


// application binary interface
import supplyABI from './supply_abi'

// contract supply address
var supplyAddress = '0xFd6603F30630C5aD67afBA6126b5c812682CEd54';

// get the reference
const supplyContract = web3.eth.contract(supplyABI).at(supplyAddress);

// get what we need, and then export it as a variable
// var disp = {
    
// }

var disp = {
    "your_address": web3.eth.accounts[0],
    "supply_address": supplyAddress,
    "contract": supplyContract,
}

alert(disp)

export {supplyContract, disp};
