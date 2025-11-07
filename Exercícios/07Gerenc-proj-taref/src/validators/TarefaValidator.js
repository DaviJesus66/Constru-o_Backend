const yup = require('yup');
const mongoose = require('mongoose');

const tarefaCreateSchema = yup.object().shape({
  titulo: yup.string().required(),
  descricao: yup.string().required(),
  dataInicio: yup.date().required(),
  dataFim: yup.date().required().min(
    yup.ref('dataInicio'), 'A data fim deve ser posterior à data início.'
  ),
  responsavel: yup.string().required().test('is-objectid', 'ID do funcionário inválido', value => mongoose.Types.ObjectId.isValid(value)),
  projeto: yup.string().required().test('is-objectid', 'ID do projeto inválido', value => mongoose.Types.ObjectId.isValid(value))
});

const tarefaUpdateSchema = yup.object().shape({
  titulo: yup.string(),
  descricao: yup.string(),
  dataInicio: yup.date(),
  dataFim: yup.date().min(
    yup.ref('dataInicio'), 'A data fim deve ser posterior à data início.'
  ),
  responsavel: yup.string().test('is-objectid', 'ID do funcionário inválido', value => mongoose.Types.ObjectId.isValid(value)),
  projeto: yup.string().test('is-objectid', 'ID do projeto inválido', value => mongoose.Types.ObjectId.isValid(value))
});

module.exports = {
  tarefaCreateSchema,
  tarefaUpdateSchema
};
