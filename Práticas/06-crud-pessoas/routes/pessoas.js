const express = require('express')
const router = express.Router()

// lista de pessoas pra simular o banco dados
let listaPessoas = [
  {
    id: 1,
    nome: "João",
    cpf: "00100100101",
    email: "joão@pedro.com",
    dataNascimento: "01/01/2000"
  },
  {
    id: 2,
    nome: "Maria",
    cpf: "00200200202",
    email: "maria@joana.com",
    dataNascimento: "01/01/1990"
  },
]

// mapear as rotas e a lógica
// #Busca
// GET /pessoas
router.get('/pessoas', (req, res, next) => {
  res.json(listaPessoas)
})

// #Busca por id
// GET /pessoas/:id
router.get('/pessoas/:id', (req, res, next) => {
  // recebendo o ID como parametro dinâmico
  const id = req.params.id
  // faço a busca na lista de pessoas pelo id recebido
  const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
  if(!pessoa) {
    return res.status(404).json({ error: "Pessoa não encontrada!!!" })
  }
  res.json(pessoa)
})

// #Criação
// POST /pessoas
router.post('/pessoas', (req, res, next) => {
    const { nome, cpf, email, dataNascimento } = req.body
    //Valdo se todos os campos foram preenchidos
    if(!nome || !cpf || !email || !dataNascimento){
    return res.status(409).json({ error: "Nome, cpf, email e DataNascimento são obrigatórios!!!"})
    }
    //Validar se o cpf já foi cadastrado
    if(listaPessoas.some(pessoas => pessoas.cpf == cpf)){
        return res.status(409).json({ error: "CPF já cadastrado!!!"})
    }

    const novaPessoa = {
    id: Date.now(),
    nome,
    cpf,
    email,
    dataNascimento
  }

  listaPessoas.push(novaPessa)
  res.status(201).json({ message: "Pessoa cadastrada com sucesso", novaPessoa})
})


// #Atualização
// PUT ou PATCH /pessoas/:id
router.put('/pessoas/:id', (req, res, next) => {
    const id = req.params.id
    const pessoas = listaPessoas.find(pessoas => pessoas.id == id)
    //valido se a pessoa existe
    if(!pessoa){
        return res.status(404).json({ error: "Pessoa não encontrada!!!"})
    }
    //valido se os daddos para atualizar vinheram na requiseição
    const { nome, email, dataNascimento } = req.body
     if(!nome || !email || !dataNascimento){
    return res.status(400).json({ error: "Nome, email e DataNascimento são obrigatórios!!!"})
    }
    //atualiizo os dados da pessoa
    pessoa.nome = nome
    pessoa.email = email
    pessoa.dataNascimento = dataNascimento
    //responde com os dados da pessoa atualizados
    res.json({message: "Pessos atualizada com sucesso!!!"})
})


// #Remoção
// DELETE /pessoas/:id


// exportar o roteador
module.exports = router