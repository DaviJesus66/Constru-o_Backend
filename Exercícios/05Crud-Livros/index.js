const express = require ('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());

// conectar no banco mongo//
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(url)
    .then(() => {
        console.log('Conectado ao MongoDB')
    })
    .catch((error) => {
        console.error('Erro ao conectar ao MongoDB:', error)
    })
//interface com o banco de dados - model
//cada model(Modelo) representa uma Collection(tabela)
const TarefaModel = mongoose.model('tarefas', new mongoose.Schema(
    {
        nome: String
    }
))

//crud

//create
app.post('/tarefas', async (req, res, next) => {
    const tarefa = req.body;
    if (!tarefa.nome) {
        return res.status(400).json({ error: 'Nome é obrigatório' });
    }
    const tarefaCriada = await TarefaModel.create(tarefa)
    res.status(201).json(tarefaCriada)
})

//read
app.get('/tarefas', async (req, res, next) => {
    const tarefas = await TarefaModel.find()
    res.json(tarefas)
})

//update
app.put('/tarefas/:id', async (req, res, next) => {
    const id = req.params;
    const tarefa = req.body;
    if (!tarefa.nome) {
        return res.status(400).json({ error: 'Nome é obrigatório' });
    }
    const tarefaAtualizada = await TarefaModel.findByIdAndUpdate(id, tarefa, { new: true })
    
    if (!tarefaAtualizada) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    res.json(tarefaAtualizada)
})

//delete
app.delete('/tarefas/:id', async (req, res, next) => {
    const id = req.params.id
    await TarefaModel.findByIdAndDelete(id)
    res.json({ message: 'Tarefa deletada com sucesso' })
})

//start
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})