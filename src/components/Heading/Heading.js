import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Heading extends Component {
  render() {
    return (
        <Row className="show-grid">
        <Col>
            <h1 className="heading">Welcome</h1>
        </Col>
      </Row>
    )
  }
}
