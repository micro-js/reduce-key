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
  return function (state, action) {
    var key = select(state, action.payload)
    state = clone(state)
    state[key] = reduce(state, action.payload)
    return state
  }
}
