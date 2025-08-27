//
function calcular(n1, n2, operador) {
  switch (operador) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n2 !== 0 ? n1 / n2 : "Erro: divisão por zero";
    default:
      return "Operador inválido";
  }
}

const n1 = parseFloat(process.argv[2]);
const operador = process.argv[3];
const n2 = parseFloat(process.argv[4]);

if (isNaN(n1) || isNaN(n2) || !operador) {
  console.log("Uso: node calculadora.js <num1> <operador> <num2>");
  console.log("Exemplo: node calculadora.js 10 + 5");
} else {
  console.log(`Resultado: ${calcular(n1, n2, operador)}`);
}