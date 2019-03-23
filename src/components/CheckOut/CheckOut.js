import React, { Component } from 'react';
import {
    Button,
    Form,
    Row,
    Col,
  } from 'react-bootstrap';

export default class CheckOut extends Component {
  render() {
    return (
      <div>
          <Row className="show-grid">
              <Col>
                    <Form className="formInlineName">
                    <Button
                      block
                      bsStyle="primary"
                      className="btn-block"
                      // type="submit"
                      disabled={this.props.isDisabled}
                      onClick={this.props.giveDiscount}
                    >
                      CheckOut
                    </Button>
                    </Form>
              </Col>
          </Row>
      </div>
    )
  }
}
