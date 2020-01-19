const isHappyNumber = (num) => {
  let atual = proximo = num;
  do {
    atual = somaQuadrados(atual);
    //proximo é utilizado para quebrar o loop caso a sequencia alcance um número repetido
    proximo = somaQuadrados(somaQuadrados(proximo));
  }
  while (atual !== proximo);

  return (atual === 1);
}

const somaQuadrados = (num) => {
  let total = 0;
  while (num != 0) {
    total += (num % 10) * (num % 10);
    num = parseInt(num / 10);
  }
  return total;
}

module.exports = isHappyNumber;