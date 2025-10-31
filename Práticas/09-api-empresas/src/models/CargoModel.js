const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        descrição: { type: String, required: true },
        salário: { type: Number, required: true }
    }
)

const CargoModel = mongoose.model('Cargos', schema)

module.exprorts = CargoModel;