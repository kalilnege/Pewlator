const express = require('express');
const Avaliador = require('../models/Avaliador');
const Consulta = require('../models/Consulta');

const router = express.Router();

// Rotas Avaliadores
router.post('/avaliadores', async (req, res) => {
    try {
        const avaliador = new Avaliador(req.body);
        await avaliador.save();
        res.status(201).json(avaliador);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/avaliadores', async (req, res) => {
    try {
        const avaliadores = await Avaliador.find();
        res.json(avaliadores);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Rotas Consultas
router.post('/consultas', async (req, res) => {
    try {
        const consulta = new Consulta(req.body);
        await consulta.save();
        res.status(201).json(consulta);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/consultas', async (req, res) => {
    try {
        const consultas = await Consulta.find();
        res.json(consultas);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
