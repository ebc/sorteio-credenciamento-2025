import React from 'react';
import { Row, Col } from 'reactstrap';
import logo from './ebc-logo.png';

const Header = () => (
  <header className="mb-4">
    <Row>
      <Col lg="4">
        <br />
        <br />
        <img src={logo} alt="logo" style={{ height: '75px', width: '304px' }} />
      </Col>
      <Col lg="8">
        <br />
        <br />
        <h4>Sorteio público para definição da ordem de credenciamento</h4>
        <p>
          Sorteio do Credenciamento de Produtoras Audiovisuais - Edital Nº
          001/2024
          <br />
          EBC, Brasília - DF
          <br />
          Data: {new Date(Date.now()).toLocaleDateString()}
        </p>
        <br />
        <br />
        <br />
      </Col>
    </Row>
  </header>
);

export default Header;
