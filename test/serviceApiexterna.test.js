// test/dataFormatter.test.js
const { expect } = require('chai');
const jsonData = require('./jsonMock.json');
const jsonDataFiles = require('./JsonMockFiles.json');
const { externalApiService, externalApiServiceAllFiles } = require('../src/services/serviceApiexterna.js'); 

describe('Data Formatter', () => {
  it('test to corroborate the formatted data',async  () => {
    // Llama a tu método formatfetchAndFormatDataData para obtener la estructura de datos
    const result = await  externalApiService.fetchAndFormatData();

    // Realiza la afirmación usando chai.expect
    expect(result).to.deep.equal(jsonData);
  });
  it('test to corroborate the data of all the files',async  () => {
    // Llama a tu método formatfetchAndFormatDataData para obtener la estructura de datos
    const result = await  externalApiServiceAllFiles.fetchAndFormatData();

    // Realiza la afirmación usando chai.expect
    expect(result).to.deep.equal(jsonDataFiles);
  });
});
