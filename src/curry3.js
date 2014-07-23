var NO_ARGS_EXCEPTION = require('./NO_ARGS_EXCEPTION');

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Internal
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @example
 *
 *      var addThree = function(a, b, c) {
 *        return a + b + c;
 *      };
 *      var curriedAddThree = curry2(addThree);
 */

var curry3 = function(fn) {
    return function(a, b, c) {
        switch (arguments.length) {
            case 0: throw NO_ARGS_EXCEPTION;
            case 1: return curry2(function(b, c) {
                return fn(a, b, c);
            });
            case 2: return function(c) {
                return fn(a, b, c);
            };
        }
        return fn(a, b, c);
    };
};

module.exports = curry2;
