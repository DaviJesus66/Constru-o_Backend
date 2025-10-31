const yup = require('yup')

const shema = yup.object().shape(
    {
        nome: yup.srtring().required("Ocampo nome é obrigatório"),
        descrição: yup.string().required("O campo descrição é obrigatório"),
        salário: yup.number()
        .min(1.518,00 "Salário não pode ser abaico de mínimo 1518.00")
        .required("O campo salário é obrigatório")
    }
)

async function validarcargo(req, res, next) {
    try {
        await shema.validate(req.body, { abortEarly: false })
        next()
    } catch (err) {
        return res.status(400).json({ errors: err.errors })
    }
}

module.exports = {validarCargo}