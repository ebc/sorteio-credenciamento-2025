import React from 'react';
import { Card, Row, Col } from 'reactstrap';

const Footer = () => (
  <footer className="mt-4">
    <Row>
      <div className="bg-light p-4 small">
        <p><em>O código-fonte dessa página de sorteio está disponível no <a href="https://github.com/ebc/sorteio-credenciamento-2025" target="_blank">repositório da EBC</a>. O código foi customizado pela EBC com base no código-fonte original da Ancine, que pode ser acessado no endereço <a href="https://gitlab.ancine.gov.br/financiamento/sorteio-pareceristas-fsa-04-2023" target="_blank">https://gitlab.ancine.gov.br/financiamento/sorteio-pareceristas-fsa-04-2023</a>.</em></p>
      </div>
    </Row>
  </footer>
);

export default Footer;
