const mongoosse = require('mongoose')

const shema = new mongoosse.Schema(
    {
        nome: { type: String, required: true },
        descrição: { type: String, required: true }
    }
)

const DepartamentoModel = mongoose.model('departamentos', shema)

module.exports = DepartamentoModel