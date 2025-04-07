import React from 'react';
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import participantes from '../participantes';

const Participantes = ({ history }) => (
  <Modal isOpen toggle={() => history.push('/sorteio')} size={'lg'}>
    <ModalHeader toggle={() => history.push('/sorteio')}>
      {participantes.length} produtoras habilitadas
    </ModalHeader>
    <ModalBody>
      <Table>
        <thead>
          <tr>
            <th>Inscrição</th>
            <th>CNPJ</th>
            <th>Razão Social</th>
          </tr>
        </thead>
        <tbody>
          {participantes &&
            participantes.map((participante, indice) => {
              return (
                <tr key={indice}>
                  <td>{participante['Inscricao']}</td>
                  <td>{participante['CNPJ']}</td>
                  <td>{participante['RazaoSocial']}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={() => history.push('/sorteio')}>
        Fechar
      </Button>
    </ModalFooter>
  </Modal>
);

export default Participantes;
