const express = require('express')
const router = express.Router()

// lista de pessoas pra simular o banco dados
let listaprofessores = [
  {
    id: 1,
    nome: "Ppedro",
    cpf: "00100100101",
    email: "joão@pedro.com",
    telefone: "61983634363",
    curso: "Matemática",
    disciplina: "Ciencias contábeis",
    dataNascimento: "03/09/1981"
  },
  {
    id: 2,
    nome: "Joanna",
    cpf: "00200200202",
    email: "maria@joana.com",
    curso: "Português",
    disciplina: "Uso das vogais",
    dataNascimento: "04/03/1990"
  },
]

router.get('/professores', (req, res, nest)=>{
    res.json(listaprofessores)
})

router.get('/professores/:id', (req, res, nest,) =>{
    const id = req.params.id
    const professor = listaprofessores.find(prof => prof.id == id)
    if(!professores){
        return res.status(404).json({error: "Professor nao encontrado!!"})
    }
    res.json(professores)
})

router.post('/professores', (req, res, nest) =>{
    const { nome, cpf, email, curso, disciplina, dataNascimento } = req.body
    if(!nome || !cpf || !email || !curso || !disciplina || !dataNascimento){

        return res.status(400).json({error: "Nome , CPF, Email, Curso, Disciplina e DataNacimento SÃO OBRIGATORIOS!!!"})
    }
    if(listaprofessores.some(professores => professores.cpf == cpf)){
        return res.status(409).json({error: "Este CPF Ja Esta Cadastrado!!!"})
    }

    const novoProfessor = {
        id: Date.now(),
        nome,
        cpf,
        email,
        curso,
        disciplina,
        dataNacimento
    }
    listaprofessores.push(novoProfessor)
    res.status(201).json({
        massage: "Professor cadastrado com sucesso", novoProfessor})
})

router.put('/professores/:id', (req, res, next) => {
    const id = req.params.id
    const professores = listaprofessores.find(professores => professores.id == id)
    if(!professores){
        return res.status(404).json({ error: "Professor não encontrado!!!"})
    }

    const { nome, email, curso, disciplina, dataNascimento } = req.body
     if(!nome || !email || !curso || !disciplina || !dataNascimento){
    return res.status(400).json({ error: "Nome, email curso, disciplina e DataNascimento são obrigatórios!!!"})
    }

    professores.nome = nome
    professores.email = email
    professores.curso = curso
    professores.disciplina = disciplina
    professores.dataNascimento = dataNascimento
    res.json({message: "Professor atualizado com sucesso!!!"})
})

router.delete('/professores/:id', (req, res) => {
    const id = req.params.id
    const index = listaprofessores.findIndex(prof => prof.id == id)
    
    if(index === -1){
        return res.status(404).json({ error: "Professor não encontrado!!!"})
    }

    listaprofessores.splice(index, 1)
    res.json({ message: "Professor deletado com sucesso!!!"})
})

// exportar o roteador
module.exports = router