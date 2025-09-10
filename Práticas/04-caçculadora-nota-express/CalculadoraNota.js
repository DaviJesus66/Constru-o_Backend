//importar o express
const express = require('express')
//criar um router(Roteador)
const router = express.Router()

// Mapeamento da rotas e implemento a lógica
// Calcula a nota do A1
router.get('/notaA1', (req, res,next) => {
    const exercício  = parseFloat(req.query.exercício)
    const trabalho  = parseFloat(req.query.trabalho)
    const prova  = parseFloat(req.query.prova)

    //validar se os parametros existem
    if (isNaN(exercício) || isNaN(trabalho)|| isNaN(prova)) {
        return res.status(400).json({ erro: "Notas inválidas!!!" })
    }

    const notaA1 = exercício + trabalho + prova

    res.json({ notaA1 })
})

// Calcula a nota do A2
router.get("/notaA2", (req, res, next) => {
    const exerício = parseFloat(req.query.exerci)
})

//calcula a nota do A2
router.get('/notaA2', (req, res,next) => {
    const exercício  = parseFloat(req.query.exercício)
    const trabalho  = parseFloat(req.query.trabalho)
    const prova  = parseFloat(req.query.prova)

// VALIDAR SE OS PARAMETROS SAO NUMEROS
    if (isNaN(exercício) || isNaN(trabalho)|| isNaN(prova)) {
        return res.status(400).json({ erro: "Notas inválidas!!!" })
    }

    //validar se as notas estão no intervalo corretp
    if (
        exercício < 0 ||
        exercício > 1 ||
        trabalho < 0 ||
        trabalho > 3 ||
        prova < 0 ||
        prova > 6
    ) {
        return res.status(400).json({ erro: "Notas fora do intervalo!!!" })
    }

    const notaA2 = exercício + trabalho + prova

    res.json({ notaA2 })
})

// Calcula a média final (A1 40% - A2 60%)
router.get("/media", (req, res,next) => {
    const notaA1  = parseFloat(req.query.notaA1)
    const notaA2  = parseFloat(req.query.notaA2)

// valido se os parametros são numeros
    if (isNaN(notaA1) || isNaN(notaA2)) {
        return res.status(400).json({ erro: "Notas inválidas!!!" })
    }
// valido se as notas estão no intervalo correto
if (notaA1 < 0 || notaA1 > 10 || notaA2 < 0 || notaA2 > 10) {
    return res.status(400).json({ erro: "Notas fora do intervalo!!!" })
}

const media = (notaA1 * 0.4) = (notaA2 * 0.6)

res.json({media })