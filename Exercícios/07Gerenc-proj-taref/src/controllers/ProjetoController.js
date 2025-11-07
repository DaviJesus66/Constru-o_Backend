const express = require('express');
const router = express.Router();

const schema = new mongoose.Schema

const ProjetoModel = require('../models/ProjetoModel');
const { validarProjeto, validarAtualizacaoProjeto } = require('../validators/ProjetoValidator');
const { validarId } = require('../validators/IDValidator');

router.get('/Projetos', async (req, res) => {
  const Projetos = await ProjetoModel.find().populate(['ProjetoGerente', 'ProjetoDepartamento']);
  res.json(Projetos);
});

router.get('/Projetos/:id', validarId, async (req, res) => {
  const Projeto = await ProjetoModel.findById(req.params.id).populate(['ProjetoGerente', 'ProjetoDepartamento']);
  if (!Projeto) {
    return res.status(404).json({ error: 'Projeto não encontrado' });
  }
  res.json(Projetos);
});

router.post('/Projetos', validarProjetos, async (req, res) => {
  const novoProjeto = await ProjetoModel.create(req.body);
  res.status(201).json(novoProjeto);
});

router.put('/Projetos/:id', validarId, validarAtualizacaoProjeto, async (req, res) => {
  const ProjetoAtualizado = await ProjetoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!ProjetoAtualizado) {
    return res.status(404).json({ error: 'Projeto não encontrado' });
  }
  res.json(ProjetoAtualizado);
});

router.delete('/Projetos/:id', validarId, async (req, res) => {
  const ProjetoDeletado = await ProjetoModel.findByIdAndDelete(req.params.id);
  if (!ProjetoDeletado) {
    return res.status(404).json({ error: 'Projeto não encontrado' });
  }
  res.status(204).send();
});

module.exports = mongoose.model('Projeto', Schema);
