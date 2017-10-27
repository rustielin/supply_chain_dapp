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

// import entries from ../../EthereumSetup.js

class Application extends Component {

    constructor(props) {
        super(props);

    }

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
