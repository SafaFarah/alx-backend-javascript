const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when SUM is passed with 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('should return 5 when SUM is passed with 1.2 and 3.7', function() {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
  });
  describe('SUBTRACT', function() {
    it('should return -4 when SUBTRACT is passed with 1.4 and 4.5', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('should return 2 when SUBTRACT is passed with 5.5 and 3.1', function() {
      expect(calculateNumber('SUBTRACT', 5.5, 3.1)).to.equal(3);
    });
  });
  describe('DIVIDE', function() {
    it('should return 0.2 when DIVIDE is passed with 1.4 and 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should return "Error" when DIVIDE is passed with 1.4 and 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  it('should throw an error when an invalid type is passed', function() {
    expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw(Error);
  });
});
