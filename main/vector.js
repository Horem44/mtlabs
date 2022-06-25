class Vector{
    ifArrays(vector_1, vector_2) {
        return (Array.isArray(vector_1) && Array.isArray(vector_2));
    }

    ifLengthsEqual(vector_1, vector_2) {
        return vector_1.length === vector_2.length;
    }

    ifElementsInt(vector_1, vector_2) {
        return !vector_1.some(isNaN) && !vector_2.some(isNaN)
    }

    checkVectors(vector_1, vector_2) {
        if (!this.ifArrays(vector_1, vector_2))
            throw new Error("params of func are not arrays")
        if(!this.ifElementsInt(vector_1, vector_2))
            throw new Error("elems of vectors are not Int")
        if (!this.ifLengthsEqual(vector_1, vector_2))
            throw new Error("lengths are not equal")
    }

    addition(vector_1, vector_2) {
        this.checkVectors(vector_1, vector_2)

        let result = [];
        for(let i = 0; i < vector_1.length; i++)
            result[i] = vector_1[i] + vector_2[i];

        return result;
    }

    subtraction(vector_1, vector_2) {
        this.checkVectors(vector_1, vector_2)

        let result = [];
        for(let i = 0; i < vector_1.length; i++)
            result[i] = vector_1[i] - vector_2[i];

        return result;
    }

    dotProduct(vector_1, vector_2) {
        this.checkVectors(vector_1, vector_2)

        let result = 0;
        for(let i = 0; i < vector_1.length; i++)
            result += vector_1[i] * vector_2[i];

        return result;
    }
}

module.exports = Vector;

