const yup = require('yup');

const projetoCreateSchema = yup.object().shape({
  nome: yup.string().required(),
  descricao: yup.string().required(),
  dataInicio: yup.date().required(),
  dataFim: yup.date().required().min(
    yup.ref('dataInicio'), 'A data fim deve ser posterior à data início.'
  )
});

const projetoUpdateSchema = yup.object().shape({
  nome: yup.string(),
  descricao: yup.string(),
  dataInicio: yup.date(),
  dataFim: yup.date().min(
    yup.ref('dataInicio'), 'A data fim deve ser posterior à data início.'
  )
});

module.exports = {
  projetoCreateSchema,
  projetoUpdateSchema
};
