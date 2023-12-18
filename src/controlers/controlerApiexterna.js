const { externalApiService, externalApiServiceAllFiles } = require('../services/serviceApiexterna.js');

/**
 * Controlador para obtener y manejar datos desde la API externa.
 */
const externalApiController = {
  /**
   * Método para obtener y manejar datos desde la API externa.
   * param {Object} req - Objeto de solicitud Express.
   * param {Object} res - Objeto de respuesta Express.
   */
  getData: async (req, res) => {
    try {
      // Obtener y formatear datos desde la API externa
      const data = await externalApiService.fetchAndFormatData();
      
      // Establecer el encabezado de la respuesta como JSON
      res.setHeader('Content-Type', 'application/json');
      
      // Enviar los datos formateados como respuesta
      res.json(data);
    } catch (error) {
      console.error(error);
      // Enviar respuesta de error en caso de fallo
      res.status(500).json({ error: 'Error getting data from external API.' });
    }
  },
};

/**
 * Controlador para obtener y manejar todos los archivos desde la API externa.
 */
const externalApiControllerAllFile = {
  /**
   * Método para obtener y manejar todos los archivos desde la API externa.
   * param {Object} req - Objeto de solicitud Express.
   * param {Object} res - Objeto de respuesta Express.
   */
  getDataAllFile: async (req, res) => {
    try {
      // Obtener y formatear datos de todos los archivos desde la API externa
      const data = await externalApiServiceAllFiles.fetchAndFormatData();
      
      // Establecer el encabezado de la respuesta como JSON
      res.setHeader('Content-Type', 'application/json');
      
      // Enviar los datos de los archivos como respuesta
      res.json(data.files);
    } catch (error) {
      console.error(error);
      // Enviar respuesta de error en caso de fallo
      res.status(500).json({ error: 'Error getting data from external API.' });
    }
  },
}

module.exports = {
  externalApiController,
  externalApiControllerAllFile,
};
