const express = require('express');
const axios = require('axios');

const router = express.Router();

// Proxy para el API 1 (QR Factorization)
router.post('/qr-factorization', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:4000/api/qr-factorization', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error calling API 1' });
    }
});

// Proxy para el API 2 (Matrix Stats)
router.post('/matrix-stats', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3001/api/matrix-stats', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error calling API 2' });
    }
});

module.exports = router;