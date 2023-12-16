const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index');  // Importa tu aplicación Express

chai.use(chaiHttp);
const expect = chai.expect;

describe('API Tests', () => {
  it('Debería devolver un status 200 en /files/data', (done) => {
    chai.request(app)
      .get('/files/data')
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Agrega más expectativas según tus necesidades
        done();
      });
  });

});