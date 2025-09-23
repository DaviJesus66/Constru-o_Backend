//criando endpoints para cada operação
//
const express = require('express');
const router = express.Router();
//SOMA
router.get('/somar', (req, res) => {
// Number() converte string para número
const numA = Number(req.query.numA);
const numB = Number(req.query.numB);
  const resultado = numA + numB;
  res.send(`Resultado da soma: ${resultado}`);
});

//SUBTRAÇÃO
router.get('/subitracao', (req, res) => {
// Number() converte string para número
const numA = Number(req.query.numA);
const numB = Number(req.query.numB);
  const resultado = numA - numB;
  res.send(`Resultado da subtração: ${resultado}`);
});

//MULTIPLICAÇÃO
router.get('/multiplicacao', (req, res) => {
// Number() converte string para número
const numA = Number(req.query.numA);
const numB = Number(req.query.numB);
  const resultado = numA * numB;
  res.send(`Resultado da multiplicação: ${resultado}`);
});

//DIVISÃO
router.get('/divisao', (req, res) => {
// Number() converte string para número
const numA = Number(req.query.numA);
const numB = Number(req.query.numB);
  if (numB === 0) {
    res.send('Erro: divisão por zero não é permitida!');
  } else {
    const resultado = numA / numB;
    res.send(`Resultado da divisão: ${resultado}`);
  }
});

//AO QUADRADO
router.get('/aoQuadrado', (req, res) => {
// Number() converte string para número
const numA = Number(req.query.numA);
  const resultado = numA * numA;
  res.send(`Resultado de ${numA}²: ${resultado}`);
});

//Raiz Quadrada
router.get('/raizQuadrada', (req, res) => {
// Number() converte string para número
const numA = Number(req.query.numA);
  if (numA < 0) {
    res.send('Erro: não é possível calcular raiz quadrada de número negativo!');
  } else {
    const resultado = Math.sqrt(numA);
    res.send(`Resultado da raiz quadrada de ${numA}: ${resultado}`);
  }
});