/**
 * Private exception to be raised when certain functions are called without
 * arguments.
 *
 * @private
 * @category Internal
 */

var NO_ARGS_EXCEPTION = new TypeError('Function called with no arguments');

module.exports = NO_ARGS_EXCEPTION;