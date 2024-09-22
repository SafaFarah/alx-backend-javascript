const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  
  it('should return 4 when 1 and 3 are passed', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when 1 and 3.7 are passed (round second number)', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when 3.7 and 1 are passed (round first number)', function() {
    assert.strictEqual(calculateNumber(3.7, 1), 5);
  });

  it('should return 5 when 1.2 and 3.7 are passed (round both numbers)', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 0 when 0.1 and -0.1 are passed', function() {
    assert.strictEqual(calculateNumber(0.1, -0.1), 0);
  });
});
