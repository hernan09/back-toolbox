const express = require('express');
const apiRoutes = require('./routes/routes.js');

const app = express();
const port = process.env.PORT || 4000;

// Utilizar las rutas definidas en el archivo routes.js bajo el prefijo '/files'
app.use('/files', apiRoutes);

// Iniciar el servidor y escuchar en el puerto definido
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
