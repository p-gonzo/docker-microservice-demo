const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const server = require('../index.js').app;

chai.use(chaiHttp);

describe('routes : index', () => {

  describe('GET /does/not/exist', () => {
    it('should handle nonexistent routes', (done) => {
      chai.request(server)
      .get('/does/not/exist')
      .end((err, res) => {
        res.status.should.equal(404);
        res.type.should.equal('text/html');
        done();
      });
    });
  });

  describe('GET /', () => {
    it('should return "Hello World"', (done) => {
      chai.request(server)
      .get('/')
      .end((err, res) => {
        res.type.should.equal('text/html');
        res.text.should.eql('Hello World');
        done();
      });
    });
  });

  describe('GET /', () => {
    it('should communicate with the Hashing MicroService', (done) => {
      chai.request(server)
      .post('/hash')
      .send({ password: 'abc123'})
      .end((err, res) => {
        res.status.should.equal(200);
        res.text.should.eql('321cba');
        done();
      });
    });
  });

});
