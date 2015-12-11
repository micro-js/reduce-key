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
  t.equal(reducer({test: 1}, 2).test, 2)
  t.end()
})

test('should not clone if nothing was changed', function (t) {
  var reducer = reduceKey(() => 'test', (state, value) => value === 3 ? value : state)
  var test = {test: 1}

  t.equal(reducer(test, 2), test)
  t.notEqual(reducer(test, 3), test)
  t.end()
})
