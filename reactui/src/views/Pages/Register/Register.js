import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Container, Row, Col, Card, CardBlock, CardFooter, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";

class Register extends Component {
  render() {
    return (
      <div className = "animated fadeIn">
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                <Card className="mx-4">
                  <CardBlock className="card-body p-4">
                    <h1>Add Item</h1>
                    <p className="text-muted">Put items on the marketplace</p>
                                     <InputGroup className="mb-3">
                    <Input type="text" placeholder="Item name"/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input type="text" placeholder="Price (eth)"/>
                  </InputGroup>
                      
                          <NavLink to="/dashboard">
                            <Button color="success" block>
                              Add Item
                            </Button>
                          </NavLink>
                  </CardBlock>

                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Register;
