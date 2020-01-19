module.exports = class Transacao {
  constructor(total, recebido) {
    this.total = total;
    this.recebido = recebido;
    this.troco = 0;
    this.numNotas = [];
  }
  imprimeNotas(notas) {
    notas.forEach(nota => {
      if (this.numNotas[nota]) {
        console.log(`${this.numNotas[nota]} x R$ ${nota.toFixed(2).replace(/\./g, ',')}`);
      }
    })
  }
}