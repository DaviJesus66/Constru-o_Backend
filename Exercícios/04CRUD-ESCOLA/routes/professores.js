const express = require('express')
const router = express.Router()

// lista de pessoas pra simular o banco dados
let listaProfessores = [
  {
    id: 1,
    nome: "Ppedro",
    cpf: "00100100101",
    email: "joão@pedro.com",
    dataNascimento: "03/09/2001"
  },
  {
    id: 2,
    nome: "Joanna",
    cpf: "00200200202",
    email: "maria@joana.com",
    dataNascimento: "04/03/1990"
  },
]



// exportar o roteador
module.exports = router