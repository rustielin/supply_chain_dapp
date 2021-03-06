import Web3 from 'web3';

const ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://rinkeby.infura.io"));

var greeterABI = [ { constant: false,
    inputs: [ [Object] ],
    name: 'getItemOwner',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'withdraw',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object], [Object] ],
    name: 'setItemPrice',
    outputs: [],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'getItemPrice',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [],
    name: 'getFunds',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'getItemHistory',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'join',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'getOwnerBalance',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [],
    name: 'addFunds',
    outputs: [ [Object] ],
    payable: true,
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'getItemForSale',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object], [Object] ],
    name: 'addItem',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'getOwnerName',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'changeToNotSellable',
    outputs: [],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'getItemName',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'purchase',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'changeToSellable',
    outputs: [],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'getOwnerItems',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { payable: true, type: 'fallback' } ]

var greeterAddress = '0x893E17DA98a3Ef3123dbeBd2B452C08B0D16D542';

const greeterContract = ETHEREUM_CLIENT.eth.contract(greeterABI).at(greeterAddress);

export {greeterContract};

