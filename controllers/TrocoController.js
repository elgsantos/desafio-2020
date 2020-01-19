const { calculaNotas } = require('../util/calculos');

const defineTroco = (transacao, notas) => {
  transacao.troco = transacao.recebido - transacao.total;
  if (transacao.troco > 0) {
    transacao.numNotas = calculaNotas(transacao.troco, notas);
  }
  return transacao;
};

module.exports = { defineTroco };