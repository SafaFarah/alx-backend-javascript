const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when SUM is passed with 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('should return 5 when SUM is passed with 1.2 and 3.7', function() {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
  });
  describe('SUBTRACT', function() {
    it('should return -4 when SUBTRACT is passed with 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('should return 3 when SUBTRACT is passed with 5.5 and 3.1', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 3.1), 3);
    });
  });
  describe('DIVIDE', function() {
    it('should return 0.2 when DIVIDE is passed with 1.4 and 4.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should return "Error" when DIVIDE is passed with 1.4 and 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
  it('should throw an error when an invalid type is passed', function() {
    assert.throws(() => calculateNumber('MULTIPLY', 1, 2), Error);
  });
});
