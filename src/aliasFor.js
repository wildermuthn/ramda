/**
 * Creates an alias for a public function.
 *
 * @private
 * @category Internal
 * @param {string} oldName The name of the public function to alias.
 * @return {Function} A function decorated with the `is`, `are`, and `and` methods. Create
 * an alias for the `oldName function by invoking any of these methods an passing it a
 * string with the `newName` parameter.
 * @example
 *
 *     // Create an alias for `each` named `forEach`
 *     aliasFor('each').is('forEach');
 */

var aliasFor = function (oldName) {
    var fn = function (newName) {
        //! Note that module has to be replaced with `ramda` for build step...
        module[newName] = module[oldName];
        return fn;
    };
    fn.is = fn.are = fn.and = fn;
    return fn;
};

module.exports = aliasFor;