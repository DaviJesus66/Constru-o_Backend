// importe o express
const express = require('express')

//crio uma instância(express) da minha aplicação
const app = express()
//guardar o numero da porta que vai ser alocada
const porta = 3000

// Middewares (Intermediarios)
app.use((req, res, next) => {
    console.log("Time: ", new Date().toTimeString)
    next()
})


// Middewares (Intermediarios)
// metodo e a rota
// req -> dados da requisição
// res -> manipulador da resposta
// next -. chamador do proximo middleware
app.get('/teste', (req, res, next) => {
    res.send("TESTE TESTANDO 123!")
})

app.get('/pessoas', (req, res, next) => {
    const pessoas = [
        {
            id: 1,
            nome: "João"
            idade: "20"
        },
        {
            id: 2,
            nome: "Pedro"
            idade: "22"
        },
    ]
    res.send("TESTE TESTANDO 123!")
})





//Execute a aplicação escolhendo a porta
app.listen(porta, () => {
    // imprimo uma mensagem pra confirmar que a aplicação está cuncionando (rodando na porta escilhida)
    console.log("Aplicação rodando em http://localhost:3000")
})