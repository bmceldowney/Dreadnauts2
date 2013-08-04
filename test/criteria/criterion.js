var Criterion = require('../../app/criteria/criterion');
var should = require('should');

describe('Criterion', function() {

    var LessThanZero = new Criterion(function(subject) {
        return subject < 0;
    });
        
    var MultipleOfTwo = new Criterion(function(subject) {
        return subject > 0 && subject % 2 === 0;
    });

    var MultipleOfThree = new Criterion(function(subject) {
        return subject > 0 && subject % 3 === 0;
    });

    it('should test a subject and return true or false', function() {
        LessThanZero.test(-4).should.be.ok;
        LessThanZero.test(4).should.not.be.ok;
        MultipleOfThree.test(9).should.be.ok;
        MultipleOfThree.test(11).should.not.be.ok;
    });

    it('should be able to join other Criterion with AND logic', function() {
        
        var MultipleOfTwoAndThree = MultipleOfThree.and(MultipleOfTwo);

        MultipleOfTwoAndThree.test(6).should.be.ok;
        MultipleOfTwoAndThree.test(4).should.not.be.ok;

        MultipleOfTwoAndThree.should.not.equal(MultipleOfTwo);
        MultipleOfTwoAndThree.should.not.equal(MultipleOfThree);
    });

    it('should be able to join other Criterion with OR logic', function() {
        
        var MultipleOfTwoOrThree = MultipleOfThree.or(MultipleOfTwo);

        MultipleOfTwoOrThree.test(4).should.be.ok;
        MultipleOfTwoOrThree.test(9).should.be.ok;
        MultipleOfTwoOrThree.test(5).should.not.be.ok;

        MultipleOfTwoOrThree.should.not.equal(MultipleOfTwo);
        MultipleOfTwoOrThree.should.not.equal(MultipleOfThree);
    });

    it('should be able to chain many Criterion', function() {
        
        var MultipleOfTwoAndThreeOrNeg = MultipleOfThree.and(MultipleOfTwo).or(LessThanZero);

        MultipleOfTwoAndThreeOrNeg.test(6).should.be.ok;
        MultipleOfTwoAndThreeOrNeg.test(3).should.not.be.ok;
        MultipleOfTwoAndThreeOrNeg.test(-3).should.be.ok;
    });
});