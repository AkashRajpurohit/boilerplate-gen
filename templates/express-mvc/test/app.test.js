const request = require('supertest');

const app = require('../src/app');

describe('app', () => {
    it('responds with a not found message', function(done) {
        request(app)
            .get('/some-random-path')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404, done);
    });
});

describe('GET /', () => {
    it('responds with a json message', function(done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, {
                message: 'Welcome to Boilerplate-gen Bootstraped Project'
            }, done);
    });
});