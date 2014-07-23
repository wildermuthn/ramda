var isArray = require('./isArray');

/**
 * Private function that determines whether or not a provided object has a given method.
 * Does not ignore methods stored on the object's prototype chain. Used for dynamically
 * dispatching Ramda methods to non-Array objects.
 *
 * @private
 * @category Internal
 * @param {Function} methodName The name of the method to check for.
 * @param {Function} obj The object to test.
 * @return {boolean} `true` has a given method, `false` otherwise.
 * @example
 *
 *      var person = { name: 'John' };
 *      person.shout = function() { alert(this.name); };
 *
 *      hasMethod('shout', person); //=> true
 *      hasMethod('foo', person); //=> false
 */

var hasMethod = function _hasMethod(methodName, obj) {
    return obj && !isArray(obj) && typeof obj[methodName] === 'function';
};

module.exports = hasMethod;