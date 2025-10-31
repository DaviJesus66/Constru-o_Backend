const yup = require('yup')

const shema = yup.object().shape(
    {
        nome: yup.srtring().required("Ocampo nome é obrigatório"),
        descrição: yup.string().required("O campo descrição é obrigatório")
    }
)

async function validarDepartamento(req, res, next) {
    try {
        await shema.validate(req.body, { abortEarly: false })
        next()
    } catch (err) {
        return res.status(400).json({ errors: err.errors })
    }
}

module.exports = {validarDepartamento}