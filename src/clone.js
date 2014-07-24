var _slice = require('._slice');

/**
 * Creates a shallow copy of an array.
 *
 * @static
 * @memberOf R
 * @category Core
 * @param {Array} list The list to clone.
 * @return {Array} A new copy of the original list.
 * @example
 *
 *      var numbers = [1, 2, 3];
 *      var numbersClone = ramda.clone(numbers); //=> [1, 2, 3]
 *      numbers === numbersClone; //=> false
 *
 *      // Note that this is a shallow clone--it does not clone complex values:
 *      var objects = [{}, {}, {}];
 *      var objectsClone = ramda.clone(objects);
 *      objects[0] === objectsClone[0]; //=> true
 */

var clone = function _clone(list) {
    return _slice(list);
};

module.exports = clone;