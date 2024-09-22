const request = require('request');
const { expect } = require('chai');

const baseUrl = 'http://localhost:7865';

describe('API tests', () => {
  describe('Index page', () => {
    it('should return status code 200 and message', (done) => {
      request.get(`${baseUrl}/`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('Cart page', () => {
    it('should return payment methods for cart when :id is a number', (done) => {
      request.get(`${baseUrl}/cart/12`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return 404 when :id is NOT a number', (done) => {
      request.get(`${baseUrl}/cart/hello`, (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments', () => {
    it('should return the correct payment methods object', (done) => {
      request.get(`${baseUrl}/available_payments`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        const expectedResponse = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };
        expect(JSON.parse(body)).to.deep.equal(expectedResponse);
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should return a welcome message with username', (done) => {
      const userName = { userName: 'Betty' };
      request.post({
        url: `${baseUrl}/login`,
        json: userName,
      }, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });

    it('should return 400 if userName is not provided', (done) => {
      request.post({
        url: `${baseUrl}/login`,
        json: {},
      }, (error, response) => {
        expect(response.statusCode).to.equal(400);
        expect(response.body).to.equal('Missing userName');
        done();
      });
    });
  });
});

