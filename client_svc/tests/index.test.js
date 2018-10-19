const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const server = require('../index.js').app;

chai.use(chaiHttp);

describe('routes : index', () => {

  describe('GET /does/not/exist', () => {
    it('should throw an error', (done) => {
      chai.request(server)
      .get('/does/not/exist')
      .end((err, res) => {
        should.exist(err);
        res.status.should.equal(404);
        res.type.should.equal('application/json');
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

});
