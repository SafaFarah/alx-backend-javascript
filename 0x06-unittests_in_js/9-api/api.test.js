const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('API tests', () => {
  it('should return status code 200 and message for GET /', (done) => {
    request.get(`${baseUrl}/`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  describe('Cart page tests', () => {
    it('should return status code 200 and correct message for valid cart ID', (done) => {
      request.get(`${baseUrl}/cart/12`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return status code 404 for non-numeric cart ID', (done) => {
      request.get(`${baseUrl}/cart/hello`, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});
