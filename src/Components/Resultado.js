import React, { Component } from 'react';
import sortear from '../utils/sorteio';
import { Table } from 'reactstrap';

class Resultado extends Component {
  state = {
    sorteados: []
  };

  componentDidMount() {
    const { momentoSorteio } = this.props.match.params;
    const sorteados = sortear(momentoSorteio);
    this.setState({
      sorteados
    });
  }

  render() {
    const { sorteados } = this.state;
    const { momentoSorteio } = this.props.match.params;
    return (
      <div>
        <strong>Sorteio realizado em {momentoSorteio}</strong>
        <Table>
          <thead>
            <tr>
              <th>Sequência</th>
              <th>Inscrição</th>
              <th>CNPJ</th>
              <th>Razão Social</th>
            </tr>
          </thead>
          <tbody>
            {sorteados.map((sorteado, indice) => {
              return (
                <tr key={indice}>
                  <th scope="row">{indice + 1}</th>
                  <td>{sorteado['Inscricao']}</td>
                  <td>{sorteado['CNPJ']}</td>
                  <td>{sorteado['RazaoSocial']}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Resultado;
