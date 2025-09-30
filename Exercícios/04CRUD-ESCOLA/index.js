const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// TODO: Membro 1 - Importar e mapear rota de alunos
const alunosRoutes = require('./routes/alunos');
app.use(alunosRoutes);

// TODO: Membro 2 - Importar e mapear rota de professores
const professoresRoutes = require('./routes/professores');
app.use(professoresRoutes);

app.listen(3000, () => {
console.log(`Servidor rodando em http://localhost:3000`);
})