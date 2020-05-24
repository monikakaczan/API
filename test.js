const chai = require('chai');
let chaiHttp = require('chai-http');
let request = require("request");
let should = require("should");
var expect = chai.expect;
import app from './index'
chai.use(chaiHttp);