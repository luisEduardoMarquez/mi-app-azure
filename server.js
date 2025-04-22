const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Ruta GET de ejemplo
app.get('/api/mensaje', (req, res) => {
    res.json({ mensaje: "Hola desde el backend en Azure!" });
});

app.listen(port, () => {
    console.log(`Backend corriendo en http://localhost:${port}`);
});