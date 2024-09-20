const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    consoleSpy.restore();
  });
  it('should log "The total is: 120" when called with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
  it('should log "The total is: 20" when called with 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
