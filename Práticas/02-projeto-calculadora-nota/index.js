//importando a lib prompt-sync
let prompt = require('prompt-sync')()

//usara lib do prompt-sync
let nome = prompt("Qual é o seu nome?")

//usando o nome capturado pelo prompt
console.log("Olá " + nome)

//importar o modulo CalculadoraNota
let {calculadoraNotaA1, calculadoraNotaA2, calculadoraNotaFinal} = require('./calculadoraNota')

//Nota 1
// perguntar pro usuário a nota de exercícios, trabalho e prova
let exercíciosA1 = parseFloat(prompt("Qual a nota de exercícios A1: "))
let trabalhoA1 = parseFloat(prompt("Qual a nota do trabalho A1: "))
let provaA1 = parseFloat(prompt("Qual a nota da prova A1: "))
let notaA1 = calculadoraNotaA1(exercíciosA1, trabalhoA1, provaA1)

console.log("### CALCULO DA NOTA A1 ###")
console.log("NOTA Exercício A1: ", exercíciosA1)
console.log("NOTA Trabalho A1: ", trabalhoA1)
console.log("NOTA Prova A1: ", provaA1)
console.log("NOTA A1 CALCULADA: ", notaA1)

// Nota 2
let exercíciosA2 = parseFloat(prompt("Qual a nota de exercícios A2: "))
let trabalhoA2 = parseFloat(prompt("Qual a nota do trabalho A2: "))
let provaA2 = parseFloat(prompt("Qual a nota da prova A2: "))
let notaA2 = calculadoraNotaA2(exercíciosA2, trabalhoA2, provaA2)

console.log("### CALCULO DA NOTA A2 ###")
console.log("NOTA Exercício A2: ", exercíciosA1)
console.log("NOTA Trabalho A2: ", trabalhoA1)
console.log("NOTA Prova A2: ", provaA1)
console.log("NOTA A2 CALCULADA: ", notaA2)

let notaFinal = calculadoraNotaFinal(notaA1, notaA2);

console.log("### Calculo da nota final ###")
console.log("Nota Final: ", notaFinal)

if (notaFinal >= 5){
    console.log("Parabéns " + nome + ". você foi Aprovado!!!")
} else {
    console.log(nome + ", estude mais, infelizmente você foi Reprovado!!!")
}