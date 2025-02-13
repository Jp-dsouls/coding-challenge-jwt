const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Endpoint para generar un token JWT
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Aquí puedes validar el usuario y la contraseña (simulado)
    if (username === 'admin' && password === 'password') {
        const user = { username };
        const token = jwt.sign(user, 'your-secret-key', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

module.exports = router;