const Tarefa = require('../models/TarefaModel');

module.exports = {
  async create(req, res) {
    try {
      const tarefa = await Tarefa.create(req.body);
      res.status(201).json(tarefa);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async findAll(req, res) {
    try {
      const tarefas = await Tarefa.find()
        .populate('responsavel')
        .populate('projeto');
      res.json(tarefas);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async findById(req, res) {
    try {
      const tarefa = await Tarefa.findById(req.params.id)
        .populate('responsavel')
        .populate('projeto');
      if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada' });
      res.json(tarefa);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .populate('responsavel')
        .populate('projeto');
      if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada' });
      res.json(tarefa);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const tarefa = await Tarefa.findByIdAndDelete(req.params.id);
      if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada' });
      res.json({ message: 'Tarefa removida com sucesso' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = router;