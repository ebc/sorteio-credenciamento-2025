import React from 'react';
import { Row, Col } from 'reactstrap';
import logo from './ebc-logo.png';

const Header = () => (
  <header className="mb-4">
    <Row>
      <Col lg="4">
        <br />
        <br />
        <img
          src={logo}
          alt="logo"
          style={{ height: '75px', width: '304px' }}
        />
      </Col>
      <Col lg="8">
        <br />
        <br />
        <h4>Sorteio público para definição da ordem de credenciamento</h4>
        <p>
            Sorteio do Credenciamento de Produtoras Audiovisuais - Edital Nº 001/2024
          <br />EBC, Brasília - DF
          <br />Data: {new Date(Date.now()).toLocaleDateString()}
        </p>
        <br />
        <br />
        <br />
      </Col>
    </Row>
    <Row>
      <Col>
        <div>
          <h5>Lotes para serem sorteados</h5>
          <ul>
            <li>
              Lote 01: Acre / Amazonas / Roraima / Rondônia / Amapá / Pará
            </li>
            <li>
              Lote 02: Maranhão / Piauí / Ceará / Rio Grande do Norte / Paraíba / Pernambuco
            </li>
            <li>
              Lote 03: Alagoas / Bahia / Sergipe / Minas Gerais / Espírito Santo
            </li>
            <li>
              Lote 04: Rio de Janeiro / São Paulo / Paraná / Santa Catarina / Rio Grande do Sul
            </li>
            <li>
              Lote 05: Tocantins / Goiás / Distrito Federal / Mato Grosso do Sul / Mato Grosso
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  </header>
);

export default Header;
