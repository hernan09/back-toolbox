const axios = require('axios');

/**
 * Función para convertir el contenido CSV a formato JSON manualmente.
 * param {string} csvContent - Contenido CSV a convertir.
 * returns {Array} - Arreglo de objetos JSON resultante.
 */
function parseCsvToJson(csvContent) {
  const lines = csvContent.split('\n');
  const headers = lines[0].split(',');
  const jsonResult = [];

  for (let i = 1; i < lines.length; i++) {
    const currentLine = lines[i].split(',');
    const obj = {};

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentLine[j];
    }

    jsonResult.push(obj);
  }

  return jsonResult;
}

/**
 * Función para validar los datos, filtrando elementos con errores.
 * param {Array} data - Arreglo de datos a validar.
 * returns {Array} - Arreglo de datos validados.
 */
function validarDatos(data) {
  // Filtrar elementos con errores
  const datosValidados = data.filter(item => {
      // Verificar campos requeridos y no vacíos
      const camposValidos = item.file !== undefined && item.text !== undefined &&
          item.number !== undefined && item.hex !== undefined &&
          item.file !== null && item.text !== null &&
          item.number !== null && item.hex !== null &&
          item.file !== "" && item.text !== "" &&
          item.number !== "" && item.hex !== "";
      return camposValidos;
  });

  return datosValidados;
}

/**
 * Servicio para obtener y formatear datos desde una API externa.
 * returns {Promise<Array>} - Promesa que resuelve en un arreglo de datos formateados.
 * throws {Error} - Error al obtener los datos de la API externa.
 */
const externalApiService = {
  fetchAndFormatData: async () => {
    const apiUrl = 'https://echo-serv.tbxnet.com/v1/secret/files';
    const token = 'aSuperSecretKey'; 

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type":" application/json"
        },
      });
      
      const dataArray = await Promise.all(
        response.data.files.map(async (item) => {
          try {
            const csvUrl = `https://echo-serv.tbxnet.com/v1/secret/file/${item}`;
            const csvResponse = await axios.get(csvUrl, {
              headers: {
                Authorization: `Bearer ${token}`,
                "content-type":" application/json"
              },
            });

            // Parsear el contenido CSV a formato JSON manualmente
            const jsonFromCsv = parseCsvToJson(csvResponse.data);
            const datosValidados = validarDatos(jsonFromCsv);
           

            // Realizar formateo adicional
            return {
              file: item,
              lines: datosValidados
            };
          } catch (csvError) {
            console.error(`Error al obtener CSV para ${item}: ${csvError.message}`);
            return {
              file: null, 
            };
          }
        })
      );
      return dataArray;
    } catch (error) {
      // Error de la API externa
      console.error(error);
      throw new Error('Error al obtener los datos de la API externa.');
    }
  },
};

/**
 * Servicio para obtener y retornar todos los archivos desde una API externa.
 * returns {Promise<Object>} - Promesa que resuelve en un objeto con la información de los archivos.
 * throws {Error} - Error al obtener los datos de la API externa.
 */
const externalApiServiceAllFiles = {
  fetchAndFormatData: async () => {
    const apiUrl = 'https://echo-serv.tbxnet.com/v1/secret/files';
    const token = 'aSuperSecretKey';

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type":" application/json"
        },
      });

      const data = response.data;
      return data;

    } catch (error) {
      // Error de la API externa
      console.error(error);
      throw new Error('Error al obtener los datos de la API externa.');
    }
  },
}

module.exports = {
   externalApiService,
   externalApiServiceAllFiles
};
