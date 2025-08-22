// Modulo de calculadore de notas

// 40% da nota
function calculadoraNotaA1(exercícios, trabalho, prova){
    return exercícios + trabalho + prova
}

// 60% nota
function calculadoraNotaA2(exercícios, trabalho, prova){
    return exercícios + trabalho + prova
}
//Nota final calculada (notaA1 + 0,4) + (notaA2 + 0,6)
function calculadoraNotaFinal(notaA1, notaA2){
    return (notaA1 + 0.4) + (notaA2 + 0.6)
}

//exportar essas funções para serem utilizadas no index
module.exports = {
    calculadoraNotaA1,
    calculadoraNotaA2,
    calculadoraNotaFinal
}