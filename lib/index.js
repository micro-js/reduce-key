/**
 * Modules
 */

var clone = require('@micro-js/clone-shallow')
var isUndefined = require('@micro-js/is-undefined')

/**
 * Expose reduceKey
 */

module.exports = reduceKey['default'] = reduceKey

/**
 * reduceKey
 */

function reduceKey (select, reduce) {
  return function (state, action) {
    var key = select(state, action)

    if (isUndefined(key) || key === false || key === null) {
      return state
    }

    var newEntity = reduce(state[key], action)

    if (newEntity !== state[key]) {
      state = clone(state)
      state[key] = newEntity
    }

    return state
  }
}
