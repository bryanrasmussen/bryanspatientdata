let chai = require("chai");

let expect = chai.expect;
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
const environment = process.env.NODE_ENV || 'development';

const serverUrl = (environment === 'development') ? 'http://localhost:3000' : 'http://localhost:80';

describe('/Get All Documents', () => {
    it('A providers request should work without any parameters', (done) => {
      chai.request(serverUrl)
          .get('/providers')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(51);
            done();
          });
    });
});
//mocha requires a context for this, so arrow functions not possible
describe('/Get Max Total Discharge of 1 should return no document', function() {
    this.timeout(10000);
    it('A providers request should return no documents if not found any match', (done) => {
      
      chai.request(serverUrl)
          .get('/providers?max_discharges=1')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
          });
    });
});

describe('/Conflicting parameters should return nothing', function() {
    this.timeout(10000);
    it('max 19 and min 21 should return no documents', (done) => {
      
      chai.request(serverUrl)
          .get('/providers?max_discharges=19&min_discharges=21')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
          });
    });
});

describe('/Empty parameters should not effect the result', function() {
    this.timeout(10000)
    it('max 19 and min= should return documents', (done) => {
      
      chai.request(serverUrl)
          .get('/providers?max_discharges=19&min_discharges=')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(51);
                res.body[0]['Provider Id'].should.be.eql('440175');
                done();
          });
    });
});

describe('/All Parameters Can be used', function() {
    this.timeout(10000);
    it('you can narrow down to a particular document by using all parameters', (done) => {
      chai.request(serverUrl)
          .get("/providers?max_discharges=19&min_discharges=12&state=TX" +
          "&min_average_covered_charges=8996&max_average_covered_charges=8997" +
          "&max_average_medicare_payments=6125&min_average_medicate_payments=6124")
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
                res.body[0]['Provider Id'].should.be.eql('450370');
                done();
          });
    });
})