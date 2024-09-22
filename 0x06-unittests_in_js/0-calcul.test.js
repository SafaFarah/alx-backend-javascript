const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  
  it('should return 4 when 1 and 3 are passed', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
});
