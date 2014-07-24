/**
 * Reports whether an array is empty.
 *
 * @static
 * @memberOf R
 * @category Core
 * @param {Array} arr The array to consider.
 * @return {boolean} `true` if the `arr` argument has a length of 0 or if `arr` is a falsy
 * value (e.g. undefined).
 * @example
 *
 *      ramda.isEmpty([1, 2, 3]); //=> false
 *      ramda.isEmpty([]); //=> true
 *      ramda.isEmpty(); //=> true
 *      ramda.isEmpty(null); //=> true
 */

var isEmpty = function isEmpty(arr) {
    return !arr || !arr.length;
};

module.exports = isEmpty;