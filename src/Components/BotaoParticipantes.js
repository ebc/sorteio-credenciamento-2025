import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'reactstrap';

const BotaoParticipantes = () => (
  <Link to="/participantes">
    <Card>
      <Button color="info">Apresentar produtoras habilitadas</Button>
    </Card>
  </Link>
);

export default BotaoParticipantes;
