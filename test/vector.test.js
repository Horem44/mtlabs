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

        it('Should throw an error if one of parameter of func is not array', () => {
            const vector = new Vector();
            expect(function(){
                vector.addition(1, [1]);
            }).to.throw('params of func are not arrays');
        });

        it('Should throw an error if both parameters of func are not arrays', () => {
            const vector = new Vector();
            expect(function(){
                vector.addition(1, 1);
            }).to.throw('params of func are not arrays');
        });

        it('Should throw an error if one of parameters of func is not arr of integers', () => {
            const vector = new Vector();
            expect(function(){
                vector.addition([1], ['a']);
            }).to.throw('elems of vectors are not Int');
        });

        it('Should throw an error if both parameters of func are not arrays of integers', () => {
            const vector = new Vector();
            expect(function(){
                vector.addition(['b'], ['a']);
            }).to.throw('elems of vectors are not Int');
        });

        it('Should throw an error if arrays lengths are not equal', () => {
            const vector = new Vector();
            expect(function(){
                vector.addition([1,2,3,4], [1,2,3]);
            }).to.throw('lengths are not equal');
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

        it('Should throw an error if one of parameter of func is not array', () => {
            const vector = new Vector();
            expect(function(){
                vector.subtraction(1, [1]);
            }).to.throw('params of func are not arrays');
        });

        it('Should throw an error if both parameters of func are not arrays', () => {
            const vector = new Vector();
            expect(function(){
                vector.subtraction(1, 1);
            }).to.throw('params of func are not arrays');
        });

        it('Should throw an error if one of parameters of func is not arr of integers', () => {
            const vector = new Vector();
            expect(function(){
                vector.subtraction([1], [3.4, 'a']);
            }).to.throw('elems of vectors are not Int');
        });

        it('Should throw an error if both parameters of func are not arrays of integers', () => {
            const vector = new Vector();
            expect(function(){
                vector.subtraction([1,2,3,'b'], ['a']);
            }).to.throw('elems of vectors are not Int');
        });

        it('Should throw an error if arrays lengths are not equal', () => {
            const vector = new Vector();
            expect(function(){
                vector.subtraction([1,2,3,4,5,6,7], [1,2,3]);
            }).to.throw('lengths are not equal');
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

        it('Should throw an error if one of parameter of func is not array', () => {
            const vector = new Vector();
            expect(function(){
                vector.dotProduct(1, [1]);
            }).to.throw('params of func are not arrays');
        });

        it('Should throw an error if both parameters of func are not arrays', () => {
            const vector = new Vector();
            expect(function(){
                vector.dotProduct(1, 1);
            }).to.throw('params of func are not arrays');
        });

        it('Should throw an error if one of parameters of func is not arr of integers', () => {
            const vector = new Vector();
            expect(function(){
                vector.dotProduct([5,5,6], ["a", "b", "c"]);
            }).to.throw('elems of vectors are not Int');
        });

        it('Should throw an error if both parameters of func are not arrays of integers', () => {
            const vector = new Vector();
            expect(function(){
                vector.dotProduct([1,2,'b'], ['cw','a',6]);
            }).to.throw('elems of vectors are not Int');
        });

        it('Should throw an error if arrays lengths are not equal', () => {
            const vector = new Vector();
            expect(function(){
                vector.dotProduct([1,2,3], [1,2]);
            }).to.throw('lengths are not equal');
        });
    });
});

