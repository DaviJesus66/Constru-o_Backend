//importa o express
const express = require('express')
//crio um roteador
const router = express.Router()

//imprememto as rotas e a logica
//CRUD de contatos (Create, Read, Update, Delete)

//Variável pra guardar a lista de contatos
let ontatos = ['João', 'Maria']

//Buscar a lista de contatos
router.get('/contatos', (req, res, next) => {
    res.json(contatos)
})

//Cadastrar o contato
router.post('/contatos', (req, res, next) => {
    const { nome } = req.body
    //validações
    if (!nome) {
        return res.status(400).json({ erro: "Nome é obrigatório!!!" })
    }
    if (contatos.includes(nome)) {
        return res.status(400).json({ erro: "Nome é obrigatório!!!" })
    }
    contatos.push(nome)
    res.status(201).json({ message: "Contato cadastro com sucesso!!!"})
})

//Deletar um contato
router.delete("/contatos/:nome", (req, res, next) => {
    const nome = req.params.nome
    contatos = contatos.filter(contato => contato != nome)
    res.json({ message: "Contato expluído com sucesso!!!"})
})

//Deletar todos os contatos
router.delete("/contatos", (req, res, next) => {
    contatos = []
    res.json({ message: "Todos os contatos foram excluídos!!!" })
})

//Exporto o roteador
module.exports = router