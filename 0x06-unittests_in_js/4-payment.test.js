const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;
  let stubCalculateNumber;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
    stubCalculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);
  });
  afterEach(() => {
    consoleSpy.restore();
    stubCalculateNumber.restore();
  });
  it('should call Utils.calculateNumber with correct arguments', function() {
    sendPaymentRequestToApi(100, 20);
    expect(stubCalculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});
