const express = require('express');
const router = express.Router();

const TarefaModel = require('../models/TarefaControll');
const { validarTarefa, validarAtualizacaoTarefa } = require('../validators/TarefaValidator');
const { validarId } = require('../validators/IDValidator');

router.post('/tarefas', async (req, res, next) => {
    const tarefa = req.body;
    if (!tarefa.nome) {
        return res.status(400).json({ error: 'Nome é obrigatório' });
    }
    const tarefaCriada = await TarefaModel.create(tarefa)
    res.status(201).json(tarefaCriada)
})

router.get('/tarefas', async (req, res, next) => {
    const tarefas = await TarefaModel.find()
    res.json(tarefas)
})

router.put('/tarefas/:id', async (req, res, next) => {
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

router.delete('/tarefas/:id', async (req, res, next) => {
    const id = req.params.id
    await TarefaModel.findByIdAndDelete(id)
    res.json({ message: 'Tarefa deletada com sucesso' })
})

module.exports = router;