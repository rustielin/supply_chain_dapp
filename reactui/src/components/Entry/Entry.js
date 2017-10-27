import React, {Component} from 'react';
import {
    Badge,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    NavbarBrand
} from 'reactstrap';

class Entry extends Component {

    constructor(props) {
        super(props);

    }

    handleClick(i) {
        alert('you bought this drug');
    }

    render() {
        return (
                <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'img/logo.png'} className="img-avatar"/>
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>
                      <NavLink to="/register">
                      Enbrel
                      </NavLink>
                      </div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jun 7, 2017
                      </div>
                    </td>
                    <td className="text-center">
                      <div>128</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2017 - Jul 10, 2018</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="warning" value="50"/>
                    </td>
                    <td className="text-center">
                      <div>0.10 ETH</div>
                    </td>
                     <td>
                    <Form inline>
                    <FormGroup>
                      <Input type="text" placeholder="0" />
                    </FormGroup>
                      {' '}
                      <Button onClick={this.handleClick}>Join Group Buy</Button>
                    </Form>
                    </td>
                    <td>
                      <div className="small text-muted">Time left</div>
                      <strong>09:10:17:30</strong>
                    </td>
                  </tr>
        )
    }
}

export default Entry;
