// Criação de aluno

const express = require('express')
const router = express.Router()

let listeAlunos = [
    {
        id : 1,
        nome: "Fernando",
        cpf : "12345678901",
        email : "fernando@aluno.com",
        telefone : "62983648547",
        dataNacimento: "01/02/2000"
    },
    {
        id : 2,
        nome: "Gabriela",
        cpf: "012345678902",
        email: "gabriela@aluno.com",
        telefone: "61938463638",
        dataNacimento: "07/05/2002"
    },
]

router.get('/alunos', (req, res, nest)=>{
    res.json(listeAlunos)
})

router.get('/alunos/:id', (req, res, nest,) =>{
    const id = req.params.id
    const alunos = listeAlunos.find(alunos = alunos.id == id)
    if(!alunos){
        return res.status(404).json({error: "Aluno nao encontrado!!"})
    }
    res.json(alunos)
})

router.post('/alunos', (req, res, nest) =>{
    const {nome, cpf, email, dataNacimento} = req.body
    if(!nome|| !cpf|| !telefone|| !email|| !dataNacimento){
        return res.status(400).json({error: "Nome , CPF, Email, Telefone e DataNacimento SÃO OBRIGATORIOS!!!"})
    }
    if(listeAlunos.some(alunos => alunos.cpf == cpf)){
        return res.status(409).json({error: "Este CPF Ja Esta Cadastrado!!!"})
    }

    const novoAluno = {
        id: Date.new(),
        nome,
        cpf,
        email,
        telefone,
        dataNacimento
    }
    listeAlunos.push(novoAluno)
    res.status(201).json({
        massage: "Aluno cadastrado com sucesso", novoAluno})
})

router.put('/alunos/:id', (req, res, next) => {
    const id = req.params.id
    const alunos = listeAlunos.find(alunos => alunos.id == id)
    if(!alunos){
        return res.status(404).json({ error: "Aluno não encontrado!!!"})
    }

    const { nome, email, curso, disciplina, dataNascimento } = req.body
     if(!nome|| !cpf|| !telefone|| !email|| !dataNacimento){
    return res.status(400).json({ error: "Nome, CPF, email, Telefone e DataNascimento são obrigatórios!!!"})
    }

    alunos.nome = nome
    alunos.email = email
    alunos.dataNascimento = dataNascimento
    res.json({message: "Aluno atualizado com sucesso!!!"})
})

router.delete('/alunos/:id', (rec, res, next) => {
    const id = req.params.id
    
})

// exportar o roteador
module.exports = router