function soma(a, b) {
    return a + b;
  }
  
function subtrai(a, b) {
    return a - b;
  }
  
function multiplica(a, b) {
    return a * b;
  }
  
function dividir(a, b) {
    if (b === 0) {
      throw new Error("Proibido dividir por zero");
    }
    return a / b;
  }
  
function aoQuadrado(a) {
    return a * a;
  }
  
function raizQuadrada(a) {
    if (a < 0) {
      throw new Error("proibido raiz quadrada de número negativo");
    }
    return Math.sqrt(a);
  }
  
module.exports = { soma, subtrai, multiplica, dividir, aoQuadrado, raizQuadrada };





