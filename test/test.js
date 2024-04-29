const expect = require("fix-esm").require("chai").expect;
const request = require('request');
console.log("TESTING HAS BEGUN");
describe('GET /api/projects/cities', () => {
    it('returns true if response status is 200', (done) => {
        request.get('http://localhost:3000/api/projects/cities', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('returns true if body status code is 200', (done) => {
        request.get('http://localhost:3000/api/projects/cities', (error, response, body) => {
            const Body = JSON.parse(body);
            expect(Body.statusCode).to.equal(200);
            done();
        });
    });
    it('returns true if data is not null', (done) => {
        request.get('http://localhost:3000/api/projects/cities', (error, response, body) => {
            const Body = JSON.parse(body);
            expect(Body.data).to.be.not.a('null');
            done();
        });
    });
    it('returns true if data is an array of city data', (done) => {
        request.get('http://localhost:3000/api/projects/cities', (error, response, body) => {
            const Body = JSON.parse(body);
            expect(Body.data).to.be.an('array');
            done();
        });
    });
    it('returns true if get message is "Get All Cities Success', (done) => {
        request.get('http://localhost:3000/api/projects/cities', (error, response, body) => {
            const Body = JSON.parse(body);
            expect(Body.message).to.equal('Get All Cities Success');
            done();
        });
    });
});

describe('POST /api/projects/cities', () => {
    it('return true if response and body statusCode are 200', (done) => {
        const cityData = {
            title: 'Test City',
            path: '/test/image/path',
            description: 'This is a test city description'
        };
        request.post({
            url: 'http://localhost:3000/api/projects/cities',
            body: JSON.stringify(cityData),
            headers: {
                'Content-Type': 'application/json'
            }
        }, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            const Body = JSON.parse(body);
            expect(Body.statusCode).to.equal(200);
            done();
        });
    });
    it('returns true if post message is "Post City Success', (done) => {
        request.post('http://localhost:3000/api/projects/cities', (error, response, body) => {
            const Body = JSON.parse(body);
            expect(Body.message).to.equal('Post City Success');
            done();
        });
    });
});