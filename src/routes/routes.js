const express = require('express');
const {externalApiController, externalApiControllerAllFile} = require('../controlers/controlerApiexterna');

const router = express.Router();

/**
 * Ruta para obtener y manejar datos desde la API externa.
 * Endpoint: /api/data
 * Método: GET
 * Controlador: externalApiController.getData
 */

router.get('/data', externalApiController.getData);

/**
 * Ruta para obtener y manejar todos los archivos desde la API externa.
 * Endpoint: /api/data/allfiles
 * Método: GET
 * Controlador: externalApiControllerAllFile.getDataAllFile
 */
router.get('/data/allfiles', externalApiControllerAllFile.getDataAllFile);

module.exports = router;


