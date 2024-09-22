const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  
  it('should return 4 when 1 and 3 are passed', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when 1 and 3.7 are passed (first rounded, second ceiling)', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 when 1 and 3.7 are passed (round second number)', function() {
    assert.strictEqual(calculateNumber(1.3, 3.7), 5);
  });
});
