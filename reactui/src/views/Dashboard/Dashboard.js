import React, {Component} from "react";
import {Bar, Line} from "react-chartjs-2";
import {NavLink} from "react-router-dom";
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

import Application from "../../components/Application/Application"

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  
  handleClick(i) {
  }  

  render() {

    // get info here
    return (
           <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Your Items
                            </CardHeader>
                            <CardBlock>
                            
                                <Application you={true}/>
                              
                            </CardBlock>
                            </Card>
                        </Col>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Marketplace
                                <div className="float-right">
                                    <NavLink to="/register">
                                      <Button color="success">
                                        Add Item to Marketplace
                                      </Button>
                                    </NavLink>
                                </div>
                            </CardHeader>
                            <CardBlock>
                                <Application/>
                               
                               
                            </CardBlock>
                            </Card>
                        </Col>
                      </Row>
            </div>
    )
  }
}

export default Dashboard;
