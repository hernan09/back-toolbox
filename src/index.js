const express = require('express');
const apiRoutes = require('./routes/routes.js');

const app = express();
const port = process.env.PORT || 4000;

app.use('/files', apiRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});