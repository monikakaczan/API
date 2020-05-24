const chai = require('chai');
let chaiHttp = require('chai-http');
let request = require("request");
let should = require("should");
var expect = chai.expect;
import app from './index'
chai.use(chaiHttp);

describe ('App API', () => {
    it ('renders the homepage', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            if (err) done(err); 
            expect(res).to.have.status(200)
            done()
        })
    })
})