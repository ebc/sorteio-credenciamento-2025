import {
  logParametros,
  logSorteio,
  logPareceristaAdicionado,
  logPareceristaNaoAdicionado
} from '../log';

it('loga corretamente parametros sorteio', () => {
  const pareceristas = [
    { 'Inscricao': '123', 'CNPJ': '48797752000151', 'RazaoSocial': 'Produtora xyz' }
  ];
  expect(
    logParametros('11/11/2018 11:11:11', pareceristas, 'semente1234')
  ).toMatchSnapshot();
});

it('loga corretamente sorteio', () => {
  const sorteado = {
    'Inscricao': '123',
    'CNPJ': '48797752000151',
    'RazaoSocial': 'Produtora xyz'
  };
  expect(logSorteio(123, sorteado)).toMatchSnapshot();
  expect(logPareceristaAdicionado()).toMatchSnapshot();
  expect(logPareceristaNaoAdicionado()).toMatchSnapshot();
});
