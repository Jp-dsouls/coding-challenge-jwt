const express = require('express');
const authRoutes = require('../routes/authRoutes');
const apiRoutes = require('../routes/apiRoutes');
const { authenticateToken } = require('../middlewares/authMiddleware');

const app = express();
const port = 3002;

// Middleware para parsear JSON
app.use(express.json());

// Rutas públicas (autenticación)
app.use('/auth', authRoutes);

// Rutas protegidas (API 1 y API 2)
app.use('/api', authenticateToken, apiRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`API Gateway running on http://localhost:${port}`);
});