import React, { useContext } from 'react';

import Card from '../layout/Card';
import { Container, Row, Col } from 'react-grid-system';

import MarketplaceContext from '../../context/marketplace/MarketplaceContext';

const CardContainer = () => {
  const marketplaceContext = useContext(MarketplaceContext);
  const { campaigns } = marketplaceContext;

  return (
    <div className="cardContainer">
      <Container>
        <Row>
          {campaigns.map(item => {
            return (
              <Col md={4} key={item.id}>
                <Card title={item.title} subtitle={item.subtitle} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CardContainer;
