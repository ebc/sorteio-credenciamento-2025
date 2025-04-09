const logParametros = (dataSorteio, pareceristas, semente) => {
  let ret = '';
  ret += 'Sorteio realizado em: ' + dataSorteio + '.\n';
  ret += logLista('Lista de habilitados', pareceristas);
  ret +=
    'Semente gerada a partir do momento exato do sorteio e da lista de participantes \n' +
    semente +
    '\n\n';
  return ret;
};

//trocar esse map por um reduce
const logLista = (nome, lista) => {
  let ret = '';
  ret += '\n' + nome + ' possui ' + lista.length + ' itens \n';
  lista.map((e, indice) => {
    ret += indice + 1 + '\t';
    ret += logParecerista(e);
    ret += '\n';
    return null;
  });
  ret += '\n';
  return ret;
};

const logParecerista = parecerista => {
  return (
    parecerista['Inscricao'] +
    '\t' +
    parecerista['CNPJ'] +
    '\t' +
    parecerista['RazaoSocial']
  );
};

module.exports = {
  logParametros,
  logLista
};
