const prompt = require('./lib/prompt');
const isHappyNumber = require('./controllers/HappyNumberController.js');

const app = async () => {
  prompt.getNumber({ name: 'num', message: 'Entrada: ' }).then(res => {
    let num = res.num;
    if (isHappyNumber(num))
      console.log(`${num} é um número feliz`);
    else
      console.log(`${num} é um número triste`);
  });
}

app();