import React, {Component} from "react";
import {web3, supplyContract, disp} from '../../../components/Application/EthereumSetup';
import {NavLink} from "react-router-dom";
import {Container, Row, Col, Card, CardBlock, CardFooter, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        item: '',
        price: 0
    };
  }

  updateItem(e) {
    this.setState({
      item: e.target.value
    });
  }

  updatePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  handleClick() {
    alert("Item: " + this.state.item + " Price: " + this.state.price);
  }

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
                    <Input type="text" placeholder="Owner name" value={this.state.name} onChange={(e) => this.updateName(e)}/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input type="text" placeholder="Item name" value={this.state.item} onChange={(e) => this.updateItem(e)}/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input type="text" placeholder="Price (eth)" value={this.state.price} onChange={(e) => this.updatePrice(e)}/>
                  </InputGroup>
    
                     <NavLink to="/dashboard">
                        <Button color="success" block onClick={() => this.handleClick()}>
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
