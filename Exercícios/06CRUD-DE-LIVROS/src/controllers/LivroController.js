const express = require('express')
const router = express.Router()
const LivroModel = require('../models/LivroModel')

// validadores como Middlewares
const { validarNovoLivro } = require('../validators/LivroValidator')
const { validarID } = require('../validators/IDValidator')

// Rotas do CRUD
//create
router.post('/livros', async (req, res, next) => {
    const livro = req.body;
    if (!livro.nome) {
        return res.status(400).json({ error: 'Nome é obrigatório' });
    }
    const livroCriado = await livrosModel.create(livro)
    res.status(201).json(livroCriado)
})

//read
router.get('/livros', async (req, res, next) => {
  try {
    const livros = await livroModel.find();
    res.status(200).json(livros);
  } catch (erro) {
    res.status(500).json({ message: 'Erro ao buscar livros', erro });
  }
});


//Buscar
router.get('/livros/:id', async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    if (!livro) {
      return res.status(404).json({ message: 'Livro não encontrado' });
    }
    res.status(200).json(livro);
  } catch (erro) {
    res.status(400).json({ message: 'Erro ao buscar livro', erro });
  }
});

//update
router.put('/livros/:id', async (req, res, next) => {
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
router.delete('/livros/:id', async (req, res, next) => {
    const id = req.params.id
    await livroModel.findByIdAndDelete(id)
    res.json({ message: 'livro deletad com sucesso' })
})

module.exports = router