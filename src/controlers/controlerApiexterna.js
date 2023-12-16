const { externalApiService, externalApiServiceAllFiles } = require('../services/serviceApiexterna.js');

const externalApiController = {
  getData: async (req,res) => {
    try {
      const data = await externalApiService.fetchAndFormatData();
      res.setHeader('Content-Type', 'application/json');
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los datos de la API externa.' });
    }
  },
};

const externalApiControllerAllFile = {
  getDataAllFile: async (req,res) => {
    try {
      const data = await externalApiServiceAllFiles.fetchAndFormatData();
      res.setHeader('Content-Type', 'application/json');
      res.json(data.files);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los datos de la API externa.' });
    }
  },
}

module.exports = {
  externalApiController,
  externalApiControllerAllFile,
};
