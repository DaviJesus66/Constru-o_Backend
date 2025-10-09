const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

app.use(express.json());

// conectar no banco mongo//

mongoose.connect('mongodb+srv://Davvisj:<db_password>@cluster0.hgjgzrq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Conectado ao MongoDB')
    })
    .catch((error) => {
        console.error('Erro ao conectar ao MongoDB:', error)
    })



app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})
