// Matrix Sum (EASY DIFFICULTY)
// Write a function to calculate the sum of all the elements in a 2D array (matrix).
// Example Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Expected Output: 45
const matrixSum = (matrix) => {
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];

        }
    }
    return sum;
}



const commonElementsPRO = (array1, array2) => {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new Error('Both inputs must be arrays');
    }

    const set1 = new Set(array1);
    const result = [];

    for (let elem of array2) {
        if (set1.has(elem)) {
            result.push(elem);
            set1.delete(elem); // Prevent duplicates in the result
        }
    }

    return result;
};

// Transpose a Matrix (MEDIUM DIFFICULTY)
// Write a function to transpose a 2D array (matrix). The transpose of a matrix swaps rows and columns.
// Example Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Expected Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

const transposeMatrix = (matrix) => {
    let transposedMatrix = [];

    for (let i = 0; i < matrix.length; i++) {
        transposedMatrix[i] = []; // Initialize each row in the transposed matrix
        for (let j = 0; j < matrix.length; j++) {
            transposedMatrix[i][j] = matrix[j][i];
        }
    }

    return transposedMatrix;
};

// Find the Sum of Each Row and Each Column in a Matrix
// Write a program that takes a 2D array (matrix) as input and calculates the sum of:
// 	1.	Each row.
// 	2.	Each column.
// Return the row sums and column sums as separate arrays.
// Example Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Expected Output: Row sums: [6, 15, 24] & Column sums: [12, 15, 18]
const matrixSumEach = (matrix) => {
    let colSum = [];
    let rowSum = [];

    for (let i = 0; i < matrix.length; i++) {
        colSum[i] = 0;
        rowSum[i] = 0;
        for (let j = 0; j < matrix.length; j++) {
            colSum[i] += matrix[j][i];
            rowSum[i] += matrix[i][j];
        }
    }

    return { "row sums": rowSum, "col sums": colSum }
}


