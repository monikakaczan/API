import app from '../index';

const chai = require('chai');
const chaiHttp = require('chai-http');


const { expect } = chai;
chai.use(chaiHttp);

describe('App API', () => {
  const testData = [
    {
      name: 'user1',
      word: 'Hello',
    },
    {
      name: 'user2',
      word: 'a man a plan a canal panama',
    },
    {
      name: 'user3',
      word: 'Was it a cat I saw',
    },
    {
      name: 'user4',
      word: 'Eva can I see bees in a cave',
    },
    {
      name: 'user5',
      word: 'No lemon no melon',
    },
    {
      name: 'user6',
      word: '111111111111111111111111111111111111111111111111',
    },
    {
      name: 'user7',
      word: 'Anna',
    },
    {
      name: 'user8',
      word: 'Top spot',
    },
  ];

  it('renders the homepage', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        done();
      });
  });
  describe('/api/submitEntry', () => {
    it('does not submit an entry if the input is not a palindrome', (done) => {
      chai
        .request(app)
        .post('/api/submitEntry')
        .send(testData[0])
        .end(() => {
          chai.request(app).post('/api/submitEntry').send(testData[2]).end((err, res) => {
            if (err) done(err);
            expect(res).to.have.status(200);
            expect(res).to.be.an('object');
            expect(res.body).to.eql([{
              name: 'user3',
              points: 13,
            }]);
            done();
          });
        });
    });

    describe('/api/getScores', () => {
      it('returns max 5 highest scores', (done) => {
        chai
          .request(app)
          .post('/api/submitEntry')
          .send(testData[0])
          .end(() => {
            chai.request(app).post('/api/submitEntry').send(testData[1]).end(() => {
              chai.request(app).post('/api/submitEntry').send(testData[2]).end(() => {
                chai.request(app).post('/api/submitEntry').send(testData[3]).end(() => {
                  chai.request(app).post('/api/submitEntry').send(testData[4]).end(() => {
                    chai.request(app).post('/api/submitEntry').send(testData[5]).end(() => {
                      chai.request(app).post('/api/submitEntry').send(testData[6]).end(() => {
                        chai.request(app).post('/api/submitEntry').send(testData[7]).end(() => {
                          chai.request(app).get('/api/getScores').end((err, res) => {
                            if (err) done(err);
                            expect(res).to.have.status(200);
                            expect(res.body).to.have.lengthOf(5);
                            done();
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
      });
    });
  });
});
