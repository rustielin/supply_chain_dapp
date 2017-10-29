import React, {Component} from 'react';
import {
    Badge,
    Button,
    Row,
    Col,
    Progress,
    Card,
    CardHeader,
    CardBlock,
    Form,
    FormGroup,
    Input,
    Table
} from 'reactstrap';

import data from './data.json'

import Entry from '../Entry/Entry'

// import {supplyContract, disp} from './EthereumSetup'

// import Web3 from 'web3';
Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/'));

var supplyABI = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "getItemOwner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [
            {
                "name": "item_id",
                "type": "uint256"
            }, {
                "name": "newPrice",
                "type": "uint256"
            }
        ],
        "name": "setItemPrice",
        "outputs": [],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [
            {
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "getItemPrice",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [],
        "name": "getFunds",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [
            {
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "getItemHistory",
        "outputs": [
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [
            {
                "name": "name",
                "type": "string"
            }
        ],
        "name": "join",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [
            {
                "name": "a",
                "type": "address"
            }
        ],
        "name": "getOwnerBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [],
        "name": "addFunds",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": true,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [
            {
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "getItemForSale",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [
            {
                "name": "serial",
                "type": "uint256"
            }, {
                "name": "n",
                "type": "string"
            }
        ],
        "name": "addItem",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [
            {
                "name": "a",
                "type": "address"
            }
        ],
        "name": "getOwnerName",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [
            {
                "name": "item_id",
                "type": "uint256"
            }
        ],
        "name": "changeToNotSellable",
        "outputs": [],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [
            {
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "getItemName",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [
            {
                "name": "itemID",
                "type": "uint256"
            }
        ],
        "name": "purchase",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [
            {
                "name": "item_id",
                "type": "uint256"
            }
        ],
        "name": "changeToSellable",
        "outputs": [],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [
            {
                "name": "a",
                "type": "address"
            }
        ],
        "name": "getOwnerItems",
        "outputs": [
            {
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "type": "function"
    }, {
        "payable": true,
        "type": "fallback"
    }
]

// contract supply address
var supplyAddress = '0x89e6f3c1c644393070aeb7fd3d7ed736a897201eab4c7c3cf4f509315cca2f74';

// get the reference
const supplyContract = web3
    .eth
    .contract(supplyABI)
    .at(supplyAddress);

// get what we need, and then export it as a variable var disp = { } var disp =
// {     "your_address": web3.eth.accounts[0],     "supply_address":
// supplyAddress,     "contract": supplyContract }


class Application extends Component {

    constructor(props) {
        super(props);

    }

    // componentWillMount() {
    //     this.contract = supplyContract
    //     this.disp = disp
    // }

    createEntry(entry) {
        return <Entry name={entry} key={entry} />;
    };

    // calls createEntry as many times as it needs
    createEntries(entries) {
        if (this.props.you) {
            return (entries.map(this.createEntry)).filter(entry => entry.seller == this.props.address);
        } else {
            return entries.map(this.createEntry);
        }
    };


    render() {

        // console.log(supplyContract.)
        return(

            <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                                    <thead className="thead-default">
                                        <tr>
                                            <th className="text-center"><i className= "icon-shield"></i></th>
                                            <th>Drug</th>
                                            <th className="text-center">ID</th>
                                            <th>Fulfillment Period</th>
                                            <th className="text-center">Lowest Price</th>
                                            <th>Buy Amount </th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                            {this.createEntries(data.entries)}
                                    </tbody>
            </Table>


        );
    }
}

export default Application;
