let prompt = require('prompt-sync')({sigint:true});

let { soma, subtrai, multiplica, dividir, aoQuadrado, raizQuadrada} = require('./calculadora');

const operacao = prompt('Escolha a uma alternativa (soma, subtrai, multiplica, dividir, aoQuadrado, raizQuadrada): ').toLowerCase();

let a, b, resultado;

switch (operacao) {
  case 'soma':
  case 'subtrai':
  case 'multiplica':
  case 'dividir':
    a = parseFloat(prompt('Escreva o primeiro número: '));
    b = parseFloat(prompt('Escreva o segundo número: '));
    
    switch (operacao) {
      case 'soma':
        resultado = soma(a, b);
        break;
      case 'subtrai':
        resultado = subtrai(a, b);
        break;
      case 'multiplica':
        resultado = multiplica(a, b);
        break;
      case 'dividir':
        try {
          resultado = dividir(a, b);
        } catch (error) {
          console.log(error.message);
          break;
        }
        break;
    }

    if (resultado !== undefined) console.log(`Resultado: ${resultado}`);
    break;

  case 'aoquadrado':
    a = parseFloat(prompt('Escreva o número: '));
    if (inten(a)) {
      console.log('Insira um número válido.');
      break;
    }
    resultado = aoQuadrado(a);
    console.log(`Resultado: ${resultado}`);
    break;

  case 'raizquadrada':
    a = parseFloat(prompt('Escreva o número: '));
    if (inten(a)) {
      console.log('Insira um número válido.');
      break;
    }
    try {
      resultado = raizQuadrada(a);
      console.log(`Resultado: ${resultado}`);
    } catch (error) {
      console.log(error.message);
    }
    break;

  default:
    console.log('Operação não reconhecida.');
}