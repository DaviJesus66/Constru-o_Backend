const yup = require('yup')

// Esquema de validação
const schemaNovoLivro = yup.object().shape(
  {
    titulo: yup.string().required("O campo nome é obrigatório"),
    autor: yup.string().required("O campo nome é obrigatório"),
    editora: yup.string(),
  }
)

// Middlewares de validação
async function validarNovoLivro(req, res, next) {
  try {
    await schemaNovoLivro.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    return res.status(400).json({ erros: error.errors })
  }
}

// exportar os middlewares
module.exports = {
  validarNovoLivro
}