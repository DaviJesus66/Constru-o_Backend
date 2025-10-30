const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  // estrutura de livro
  {
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: String,
  ano: Number,
  preco: Number
    },
  // parametros
  // salva data de criação e a data de atualização do registro
  { timestamps: true }
)

// modelo
const LivroModel = mongoose.model('Livros', schema)

module.exports = LivroModel