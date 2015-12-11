/**
 * Modules
 */

var clone = require('@micro-js/clone-shallow')

/**
 * Expose reduceKey
 */

module.exports = reduceKey['default'] = reduceKey

/**
 * reduceKey
 */

function reduceKey (select, reduce) {
  return function (state, value) {
    var key = select(state, value)
    state = clone(state)
    state[key] = reduce(state, value)
    return state
  }
}
