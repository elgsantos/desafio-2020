const prompt = require('./lib/prompt');
const Transacao = require('./models/Transacao');
const TrocoController = require('./controllers/TrocoController');

const notas = [100, 50, 20, 10, 5, 2, 1];
const moedas = [0.50, 0.25, 0.10, 0.05];

const app = async () => {
  prompt.getDecimal({ name: 'total', message: '1. Valor a ser pago: ' }).then(res => {
    let total = res.total.replace(/,/g, '.');

    prompt.getDecimal({ name: 'recebido', message: '2. Valor efetivamente pago: ' }).then(res => {
      let recebido = res.recebido.replace(/,/g, '.');

      var transacao = new Transacao(total, recebido);
      transacao = TrocoController.defineTroco(transacao, [...notas, ...moedas]);

      if (transacao.troco < 0) {
        console.log(`Cliente deve R$ ${(transacao.troco * -1).toFixed(2).replace(/\./g, ',')}`);
      } else {
        console.log(`> 3. Troco: R$ ${transacao.troco.toFixed(2).replace(/\./g, ',')}`);
        //imprime quantidade de notas formatado
        transacao.imprimeNotas([...notas, ...moedas]);
      }
    });
  });
}

app();