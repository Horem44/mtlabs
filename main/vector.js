class Vector{
    addition(vector_1, vector_2) {
        let result = [];
        for(let i = 0; i < vector_1.length; i++)
            result[i] = vector_1[i] + vector_2[i];

        return result;
    }

    subtraction(vector_1, vector_2) {
        let result = [];
        for(let i = 0; i < vector_1.length; i++)
            result[i] = vector_1[i] - vector_2[i];

        return result;
    }

    dotProduct(vector_1, vector_2) {
        let result = 0;
        for(let i = 0; i < vector_1.length; i++)
            result += vector_1[i] * vector_2[i];

        return result;
    }
}

module.exports = Vector;
