/**
 * Imports
 */

var reduceKey = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var reducer = reduceKey(() => 'test', (state, value) => value)
  t.equal(reducer({test: 1}, {payload: 2}).test, 2)
  t.end()
})
