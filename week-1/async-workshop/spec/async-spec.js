/* Since I'm using Stardard JS (JavaScript style guide, linter, and formatter), I need to declare global variables with a "global comment" as seen below */

/* global describe it expect fail jasmine xdescribe */

// This prevents Standard JS from complaining that "describe is undefined", etc.
// The fact that Jasmine pollutes the global namespace is a relic of the past when javascript had no module system.
// Now days, libraries should NOT pollute the global namespace, and instead should use a module system.

// Starting next week I'll require you all to use Standard JS as well.
// You will also be required to use a module system going forward.

// here is how we import our module
import async from '../src/async.js'

// here we set jasmine's timeout to be 1.5 seconds
// the default is 5 seconds, which is way too long for our needs
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1500

describe('parallel', function () {
  it('should call the functions without waiting until the previous function completes. Once tasks have completed, results are passed to the final callback as an array ', function (done) {
    const testArr = []

    async.parallel([
      function (callback) {
        setTimeout(function () {
          testArr.push('one')
          callback(null, 'one')
        }, 200)
      },
      function (callback) {
        setTimeout(function () {
          testArr.push('two')
          callback(null, 'two')
        }, 100)
      }
    ],
    function (err, results) {
      expect(err).toEqual(null)
      // the results array will equal ['one','two'] even though
      // the second function had a shorter timeout.
      expect(results).toEqual(['one', 'two'])

      // however, our testArr should have had 'two' pushed to it first
      expect(testArr).toEqual(['two', 'one'])
      done()
    })
  })

  it('If any of the functions pass an error to its callback, the main callback should be immediately called with the value of the error.', function (done) {
    const testArr = []

    async.parallel([
      function (callback) {
        setTimeout(function () {
          testArr.push('one')
          callback(null, 'one')
        }, 200)
      },
      function (callback) {
        setTimeout(function () {
          testArr.push('two')
          callback(new Error('Error'))
        }, 100)
      }
    ],
    function (err, results) {
      expect(err).toBeInstanceOf(Error)
      expect(err.message).toEqual('Error')
      expect(testArr).toEqual(['two'])
      done()
    })
  })
})

// The below tests are disabled so they don't cause a distraction while you are working on the first one.
// To enable them, change "xdescribe" to "describe". Just delete the "x" character.
// This is how you disable/enable tests in Jasmine.

xdescribe('map', function () {
  // We will just do the array version of async.map, even though the actual async library also allows an object to be passed to async.map

  it('should produce a new collection of values by mapping each value in collection through the iteratee function', function (done) {
    // this function will square its argument.
    // since async functions can't "return" the value immediately, they have to communicate their result through a callback
    function asyncSquare (x, callback) {
      setTimeout(function () {
        callback(null, x * x) // call the callback passing in x squared
      }, 100)
    }

    async.map([1, 2, 3, 4], asyncSquare, function (err, results) {
      expect(err).toEqual(null)
      expect(results).toEqual([1, 4, 9, 16])
      done()
    })
  })

  it('If any of the functions pass an error to its callback, the main callback should be immediately called with the value of the error', function (done) {
    function asyncSquareWithErrorHandling (x, callback) {
      setTimeout(function () {
        // check if x is a number before trying to square it
        if (typeof x !== 'number') {
          return callback(new Error(`value "${x}" is not a number`))
        }

        callback(null, x * x)
      }, 100)
    }

    async.map([1, 2, 'not a number', 4], asyncSquareWithErrorHandling, function (err, results) {
      expect(err).toBeInstanceOf(Error)
      expect(err.message).toEqual('value "not a number" is not a number')
      done()
    })
  })
})

// delete the "x" to enable this test.

xdescribe('waterfall', function () {
  it('should call the functions in sequence, passing the result to the next function', function (done) {
    const testArr = []

    async.waterfall([
      function (callback) {
        callback(null, 'one', 'two')
      },
      function (arg1, arg2, callback) {
        expect(arg1).toEqual('one')
        expect(arg2).toEqual('two')

        testArr.push(arg1)
        testArr.push(arg2)

        callback(null, 'three')
      },
      function (arg1, callback) {
        expect(arg1).toEqual('three')

        testArr.push(arg1)

        callback(null, 'done')
      }
    ], function (err, result) {
      expect(err).toEqual(null)
      expect(result).toEqual('done')

      expect(testArr).toEqual(['one', 'two', 'three'])
      done()
    })
  })

  it('should not continue to execute tasks upon error, should call callback passing in error', function (done) {
    const testArr = []

    async.waterfall([
      function (callback) {
        callback(null, 'one', 'two')
      },
      function (arg1, arg2, callback) {
        expect(arg1).toEqual('one')
        expect(arg2).toEqual('two')

        testArr.push(arg1)
        testArr.push(arg2)

        callback(new Error('ERROR'))
      },
      function (arg1, callback) {
        fail('should not reach this function')
        testArr.push(arg1)

        callback(null, 'done')
      }
    ], function (err, result) {
      expect(err).toBeInstanceOf(Error)
      expect(err.message).toEqual('ERROR')

      expect(testArr).toEqual(['one', 'two'])
      done()
    })
  })
})
