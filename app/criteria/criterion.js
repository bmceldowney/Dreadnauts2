/**
 * A criterion is an encapsulated bit of complex
 * logic that can be used and reused to test
 * other entities of various types.

 * It implements the "chain of responsibility"
 * pattern, which means that once an entity has
 * passed one criterion's test, that criterion
 * may defer further testing to another criterion.
 *
 * @param description {string} Describes the purpose
 *      of this criterion.
 * @param logic {function} A function that returns a 
 *      boolean value.
 */
module.exports = exports = function(logic) {
    this._logic = logic || function() { return true; };
    this._and = [];
    this._or = [];
};

exports.prototype = {

    get logic() {
        return this._logic;
    },

    set logic(value) {
        if (typeof value == 'function') {
            this._logic = value;
        }
        else {
            throw new TypeError('argument must be a function', 'criteria\\criterion.js');
        }
    }
};

/**
 * Test a subject against this Criterion.
 * @param subject {*} Something to test against.
 */
exports.prototype.test = function(subject) {
    
    var result = this._logic(subject);

    // First check all the AND associations
    if (result == true) {
        result = this._and.every(function(criterion) {
            return criterion.test(subject);
        });
    }
    
    // If necessary, check all the OR associations
    if (result == false) {
        result = this._or.some(function(criterion) {
            return criterion.test(subject); 
        });
    }

    return result;
};

/**
 * Joins two existing criteria with AND logic.
 * @param criterion {Criterion} Another Crtierion
 */
exports.prototype.and = function(criterion) {
    return join(this, criterion, '_and');
}

/**
 * Joins two existing criteria with OR logic.
 * @param criterion {Criterion} Another Crtierion
 */
exports.prototype.or = function(criterion) {
    return join(this, criterion, '_or');
}

function join(a, b, collection) {

    if (a instanceof exports == false || b instanceof exports == false) {
        throw new Error('argument must be a Criterion', 'criteria\\criterion.js');
    }

    var result = new exports(a.test.bind(a));

    result[collection].push(b);
    return result;
}