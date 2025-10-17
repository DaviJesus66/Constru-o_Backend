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
const LivroModel = mongoose.model('livros', new mongoose.Schema(
    {
        nome: String
    }
))

////
const livroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: String,
  ano: Number,
  preco: Number
});
//crud

//create
app.post('/livros', async (req, res, next) => {
    const livro = req.body;
    if (!livro.nome) {
        return res.status(400).json({ error: 'Nome é obrigatório' });
    }
    const livroCriado = await livrosModel.create(livro)
    res.status(201).json(livroCriada)
})

//read
app.get('/livros', async (req, res, next) => {
    const livros = await livroModel.find()
    res.json(livros)
})

//update
app.put('/livros/:id', async (req, res, next) => {
    const id = req.params;
    const livro = req.body;
    if (!livro.nome) {
        return res.status(400).json({ error: 'Nome é obrigatório' });
    }
    const livroAtualizada = await livroModel.findByIdAndUpdate(id, livro, { new: true })
    
    if (!livroAtualizada) {
        return res.status(404).json({ error: 'Livro não encontrado' });
    }

    res.json(livroAtualizada)
})

//delete
app.delete('/livros/:id', async (req, res, next) => {
    const id = req.params.id
    await livroModel.findByIdAndDelete(id)
    res.json({ message: 'livro deletad com sucesso' })
})

//start
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})