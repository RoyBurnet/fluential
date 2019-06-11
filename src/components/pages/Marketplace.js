import React from 'react';
import CardContainer from '../layout/CardContainer';
import { Container, Row, Col } from 'react-grid-system';

const Marketplace = () => {
  return (
    <div className="page-container">
      <Container>
        <Row>
          <Col>
            <div className="title">
              <h2>Marketplace</h2>
            </div>
          </Col>
        </Row>
        <CardContainer />
      </Container>
    </div>
  );
};

export default Marketplace;
