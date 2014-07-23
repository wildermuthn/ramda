var NO_ARGS_EXCEPTION = require('./NO_ARGS_EXCEPTION');

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Internal
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @example
 *
 *      var addTwo = function(a, b) {
 *        return a + b;
 *      };
 *      var curriedAddTwo = curry2(addTwo);
 */

var curry2 = function(fn) {
    return function(a, b) {
        switch (arguments.length) {
            case 0: throw NO_ARGS_EXCEPTION;
            case 1: return function(b) {
                return fn(a, b);
            };
        }
        return fn(a, b);
    };
};

module.exports = curry2;