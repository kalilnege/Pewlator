const mongoose = require('mongoose');

const AvaliadorSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    matricula: { type: String, required: true },
    funcao: { type: String, required: true },
});

module.exports = mongoose.model('Avaliador', AvaliadorSchema);
