# Async Utilities

Similar to the [previous lab](./bat-belt.md), we are going to implement some utility functions. The difference is these functions will have to do with asynchronicity.

Similar to the history of underscore (described in the readme for the previous lab), some of the async utility libraries aren't used much either. For example, the [Q](http://documentup.com/kriskowal/q/) and [bluebird](http://bluebirdjs.com/docs/getting-started.html) libraries were commonly used to create promises, before ES6 introduced [native promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). They still may be used today for their extra features.

Other async libraries continue to be common due to the way they handle the control flow of async code.

## Activity

**I'd like this activity to be done in pairs.**

Before going on to implement, first play around with some of the async utilities to get a feel for what they are offering.

Check out and play around with the following:

* [async](https://caolan.github.io/async/v3/) - library of async utility functions
* [Parseq](https://github.com/douglascrockford/parseq)
  * Read the docs and try to get the demo working


Then implement the following functions

* [Parallel](https://caolan.github.io/async/v3/docs.html#parallel)
  * This is similar to Parseq's [Parallel](https://caolan.github.io/async/v3/docs.html#parallel)
* [waterfall](https://caolan.github.io/async/v3/docs.html#waterfall)
  * This is similar to Parseq's [Sequence](https://github.com/douglascrockford/parseq#sequence)
* [map](https://caolan.github.io/async/v3/docs.html#map)


After completing those, feel free to play around more and/or implement more functions from either async or Parseq.

### Hard mode

If you completed the above, and perhaps you already have experience with this stuff and want an additional challenge, your task is to implement Promises from scratch.

Ask for further guidance/clarification.
