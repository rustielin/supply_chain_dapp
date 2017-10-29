
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

export {supplyABI};