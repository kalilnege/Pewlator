const mongoose = require('mongoose');

const ConsultaSchema = new mongoose.Schema({
    nomeCrianca: { type: String, required: true },
    leito: { type: String, required: true },
    diagnostico: { type: String, required: true },
    dataAvaliacao: { type: Date, required: true },
    pontuacaoPEWS: { type: Number, required: true },
    intervencao: { type: String, required: true },
});

module.exports = mongoose.model('Consulta', ConsultaSchema);
