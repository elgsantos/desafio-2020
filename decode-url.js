const prompt = require('./lib/prompt');
const { decodeUrl, getString } = require('./controllers/UrlController.js')

const app_decode = async () => {
  prompt.getInput({ name: 'link', message: '1. Entrada: ' }).then(res => {
    //let link = 'ssh://fulano%senha@git.com/';
    //let link = 'https://globoesporte.globo.com';
    //let link = 'http://www.google.com/mail/user=asd';
    let link = res.link;
    let url = decodeUrl(link);
    if (url) {
      console.log('> 2. Saída');
      getString(url);
    }
  });
}

app_decode();