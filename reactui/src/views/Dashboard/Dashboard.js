import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import {Bar, Line} from "react-chartjs-2";
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
} from "reactstrap";

//Random Numbers
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// var elements = 27;
// var data1 = [];
// var data2 = [];
// var data3 = [];

// for (var i = 0; i <= elements; i++) {
//   data1.push(random(50, 200));
//   data2.push(random(80, 100));
//   data3.push(65);
// }

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleClick(i) {
    alert('you bought this drug');
  }

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
          <Card>
            <CardHeader>
              Group Buys
            </CardHeader>
            <CardBlock>
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
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'img/avatars/1.png'} className="img-avatar"/>
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

                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'img/avatars/2.png'} className="img-avatar"/>
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>
                      <NavLink to="/register">
                      Levothyroxine
                      </NavLink>
                      </div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: April 1, 2017
                      </div>
                    </td>
                    <td className="text-center">
                      <div>124</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>75%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">April 1, 2017 - Jul 10, 2018</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="info" value="75"/>
                    </td>
                    <td className="text-center">
                      <div>0.05 ETH</div>
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
                      <strong>11:51:20:47</strong>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'img/avatars/3.png'} className="img-avatar"/>
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>
                      <NavLink to="/register">
                      Losartan
                      </NavLink>
                      </div>
                      <div className="small text-muted">
                        <span>Fulfilled</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <div>125</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>100%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Order Fulfilled</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="100"/>
                    </td>
                    <td className="text-center">
                      <div>0.07 ETH</div>
                    </td>
                     <td>
                    <Form inline>
                    <FormGroup>
                      <Input type="text" placeholder="0" />
                    </FormGroup>
                      {' '}
                      <Button onClick={this.handleClick}>Order</Button>
                    </Form>
                    </td>
                    <td>
                      <div className="small text-muted">Time left</div>
                      <strong>Fulfilled</strong>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'img/avatars/4.png'} className="img-avatar"/>
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>
                      <NavLink to="/register">
                      Simvastatin
                      </NavLink>
                      </div>
                      <div className="small text-muted">
                        <span>Fulfilled</span> | Registered: March 24, 2016
                      </div>
                    </td>
                    <td className="text-center">
                      <div>126</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>100%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Order Fulfilled</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="100"/>
                    </td>
                    <td className="text-center">
                      <div>0.03 ETH</div>
                    </td>
                     <td>
                    <Form inline>
                    <FormGroup>
                      <Input type="text" placeholder="0" />
                    </FormGroup>
                      {' '}
                      <Button onClick={this.handleClick}>Order</Button>
                    </Form>
                    </td>
                    <td>
                      <div className="small text-muted">Time left</div>
                      <strong>Fulfilled</strong>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'img/avatars/5.png'} className="img-avatar"/>
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>
                      <NavLink to="/register">
                      Metroprolol ER
                      </NavLink>
                      </div>
                      <div className="small text-muted">
                        <span>Unfulfilled</span> | Registered: Aug 17,2015
                      </div>
                    </td>
                    <td className="text-center">
                      <div>127</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>17%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Order Expired</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="danger" value="17"/>
                    </td>
                    <td className="text-center">
                      <div>0.31 ETH</div>
                    </td>
                     <td>
                     Expired
                    </td>
                    <td>
                      <div className="small text-muted">Time left</div>
                      <strong>Expired</strong>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'img/avatars/3.png'} className="img-avatar"/>
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>
                      <NavLink to="/register">
                      Alfuzosin HCL
                      </NavLink>
                      </div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jun 7, 2017
                      </div>
                    </td>
                    <td className="text-center">
                      <div>129</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>46%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2017 - Jul 10, 2018</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="warning" value="46"/>
                    </td>
                    <td className="text-center">
                      <div>0.07 ETH</div>
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

                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'img/avatars/1.png'} className="img-avatar"/>
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>
                      <NavLink to="/register">
                      Alprazolam
                      </NavLink>
                      </div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jun 7, 2017
                      </div>
                    </td>
                    <td className="text-center">
                      <div>123</div>
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
                      <div>0.13 ETH</div>
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
                      <strong>06:10:13:30</strong>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'img/avatars/6.png'} className="img-avatar"/>
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>
                      <NavLink to="/register">
                      Diltiazem ER
                      </NavLink>
                      </div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jun 7, 2017
                      </div>
                    </td>
                    <td className="text-center">
                      <div>130</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>31%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">February 1, 2017 - Jul 10, 2018</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="danger" value="31"/>
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
                      <strong>02:10:17:30</strong>
                    </td>
                  </tr>


                  </tbody>
                </Table>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard;
