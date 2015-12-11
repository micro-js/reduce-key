
# reduce-key

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Reduce a keyed map (or array), using a selector function.

## Installation

    $ npm install @micro-js/reduce-key

## Usage

One thing that often prevents the fully declarative construction of reducers is keyed maps (e.g. objects of the form `{[key]: entity}`, or arrays). reduceKey solves this problem, by allowing you to specify a selector function that decides which subject to apply the reducer to.


```js
var reduceKey = require('@micro-js/reduce-key')

const todoReducer = combineReducers({
  text: handleActions({
    [TODO_SET_TEXT]: (state, {text}) => text,
    [TODO_CLEAR_TEXT]: () => ''
  }),
  completed: handleActions({
    [TOGGLE_COMPLETED]: (state) => !state
  })
})

export default combineReducers({
  todos: reduceKey((state, {idx}) => idx, todoReducer)
})
```

## API

### reduceKey(select, reduce)

- `select` - A function that accepts state and `payload` (from the action) and returns the key.
- `reduce` - A reducer that reduces over the entities within the map or array

**Returns:** A reducer that reduces over the sub-object in the key and returns a new copy of the map, with the sub-object specified by `select(state, payload)` updated by your reducer.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/reduce-key.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/reduce-key
[git-image]: https://img.shields.io/github/tag/micro-js/reduce-key.svg
[git-url]: https://github.com/micro-js/reduce-key
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@micro-js/reduce-key.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-js/reduce-key
