const prompt = require('./lib/prompt');
const { getIntervalos } = require('./controllers/IntervaloController');

const intervalo_numeros = async () => {
  prompt.getInput({ name: 'numeros', message: 'Entrada: ' }).then(res => {
    let resultado = getIntervalos(res.numeros);
    if (resultado) {
      console.log(`- Saída: ${resultado}`);
    } else {
      console.log('Não foi fornecida uma lista válida.');
    }
  });
}

intervalo_numeros();