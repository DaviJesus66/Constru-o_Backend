const express = requisse('express')
const app = express()

//configurar e mapear os imtermediários
const cors = require('cors')
app.use(cors()) // habilitar o CORS do browser
app.use(express.json()) // receber JSON no body da requisição

//mapear os meus routes
const pessoasRouter = require('./routes/pessoas')
app.use(pessoasRouter)

//executar a aplicação
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})