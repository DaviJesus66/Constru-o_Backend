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

router.get('/alunos', (req, res, next)=>{
    res.json(listeAlunos)
})

router.get('/alunos/:id', (req, res, next,) =>{
    const id = req.params.id
    const alunos = listeAlunos.find(alunos => alunos.id == id)
    if(!alunos){
        return res.status(404).json({error: "Aluno nao encontrado!!"})
    }
    res.json(alunos)
})

router.post('/alunos', (req, res, next) =>{
    const {nome, cpf, email, dataNacimento, telefone} = req.body
    if(!nome|| !cpf|| !telefone|| !email|| !dataNacimento){
        return res.status(400).json({error: "Nome , CPF, Email, Telefone e DataNacimento SÃO OBRIGATORIOS!!!"})
    }
    if(listeAlunos.some(alunos => alunos.cpf == cpf)){
        return res.status(409).json({error: "Este CPF Ja Esta Cadastrado!!!"})
    }

    const novoAluno = {
        id: Date.now(),
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
    const aluno = listeAlunos.find(alunos => alunos.id == id)
    if(!aluno){
        return res.status(404).json({ error: "Aluno não encontrado!!!"})
    }

    const { nome, email, dataNacimento, telefone, cpf} = req.body
     if(!nome|| !cpf|| !telefone|| !email|| !dataNacimento){
    return res.status(400).json({ error: "Nome, CPF, email, Telefone e DataNascimento são obrigatórios!!!"})
    }

    aluno.nome = nome
    aluno.email = email
    aluno.dataNacimento = dataNacimento
    aluno.telefone = telefone
    aluno.cpf = cpf
    res.json({message: "Aluno atualizado com sucesso!!!"})
})

router.delete('/alunos/:id', (req, res, next) => {
    const id = req.params.id
    listeAlunos = listeAlunos.filter(alunos => alunos != id)
    res.json({message:"Aluno Excluido Com Sucesso!!!"})
})

// exportar o roteador
module.exports = router