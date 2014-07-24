var concat = require('./concat');
var aliasFor = require('.aliasFor');

/**
 * Returns a new list with the given element at the front, followed by the contents of the
 * list.
 *
 * @static
 * @memberOf R
 * @category Core
 * @alias cons
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} arr The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @example
 *
 *      ramda.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */

var prepend = function _prepend(el, arr) {
    return concat([el], arr);
};

aliasFor("prepend").is("cons");

module.exports = prepend;