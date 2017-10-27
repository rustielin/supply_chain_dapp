import React, {Component} from 'react';
import {
    Badge,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    NavbarBrand
} from 'reactstrap';

import data from './data.json'

import Entry from '../Entry/Entry.js'

class Application extends Component {

    constructor(props) {
        super(props);
    }

    createEntry(entry) {
        alert("FFF")
        return <Entry name={entry} key={entry} />;
    };

    // calls createEntry as many times as it needs
    createEntries(entires) {
        alert("FUCK")
        // entries.map(this.createEntry);
        
    };


    render() {
        return(
            <div>
                poopoo
                {JSON.stringify(data)}
                {this.createEntries(data.entries)}
            </div>
        );
    }
}

export default Application;
