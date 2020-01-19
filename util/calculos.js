calculaNotas = (troco, notas) => {
  var numNotas = {};
  notas.forEach(function (nota) {
    if (nota > troco) {
      return;
    }
    else {
      numNotas[nota] = parseInt(troco / nota);
      troco -= numNotas[nota] * nota;
      return;
    }
  });
  return numNotas;
}

module.exports = {
  calculaNotas
}