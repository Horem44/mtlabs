const Vector = require("/Users/ilyayegorov/Documents/SUCH/OOP/main/vector.js");
const {expect} = require("chai");

describe('Vector class', function() {
    describe('Addition method', function() {
        it('Should return [2,4,6,8] when both vectors are setted', () => {
            const vector = new Vector();
            const expected =  [2,4,6,8];
            const result = vector.addition([1,2,3,4], [1,2,3,4]);
            expect(result).deep.to.equal(expected);
        });

        it('Should return [0,4,0,8] when both vectors have negative values', () => {
            const vector = new Vector();
            const expected =  [0,4,0,8];
            const result = vector.addition([-1,2,3,4], [1,2,-3,4]);
            expect(result).deep.to.equal(expected);
        });

        it('Should return [] when first vector is empty', () => {
            const vector = new Vector();
            const result = vector.addition([], [1,2,3,4]);
            expect(result.length).equal(0);
        });
    });

    describe('Subtraction method', function() {
        it('Should return [0,0,0,0] when both vectors are setted and equal', () => {
            const vector = new Vector();
            const expected =  [0,0,0,0];
            const result = vector.subtraction([1,2,3,4], [1,2,3,4]);
            expect(result).deep.to.equal(expected);
        });

        it('Should return [2,3,4,5] when both vectors are setted', () => {
            const vector = new Vector();
            const expected =  [2,3,4,5];
            const result = vector.subtraction([3,5,7,9], [1,2,3,4]);
            expect(result).deep.to.equal(expected);
        });

        it('Should return [-4,3,4,13] when both vectors have negative values', () => {
            const vector = new Vector();
            const expected =  [-4,3,4,13];
            const result = vector.subtraction([-3,5,7,9], [1,2,3,-4]);
            expect(result).deep.to.equal(expected);
        });

        it('Should return [] when first vector is empty', () => {
            const vector = new Vector();
            const result = vector.subtraction([], [1,2,3,4]);
            expect(result.length).equal(0);
        });
    });

    describe('DotProduct method', function() {
        it('Should return 30 when both vectors are setted and equal', () => {
            const vector = new Vector();
            const expected =  30;
            const result = vector.dotProduct([1,2,3,4], [1,2,3,4]);
            expect(result).to.equal(expected);
        });

        it('Should return 70 when both vectors are setted', () => {
            const vector = new Vector();
            const expected =  70;
            const result = vector.dotProduct([3,5,7,9], [1,2,3,4]);
            expect(result).to.equal(expected);
        });

        it('Should return -8 when both vectors have negative values', () => {
            const vector = new Vector();
            const expected = -8;
            const result = vector.dotProduct([-3,5,7,9], [1,2,3,-4]);
            expect(result).to.equal(expected);
        });
    });
});
//
// /usr/local/bin/node /usr/local/lib/node_modules/mocha/bin/mocha.js --ui bdd --reporter /Applications/WebStorm.app/Contents/plugins/NodeJS/js/mocha-intellij/lib/mochaIntellijReporter.js /Users/ilyayegorov/Documents/SUCH/OOP/test
