
function multiplyMatrices(A, B) {
    let rowsA = A.length, colsA = A[0].length;
    let rowsB = B.length, colsB = B[0].length;

    if (colsA !== rowsB) {
        throw new Error("Matrix multiplication not possible: cols of A must match rows of B");
    }

  
    let result = new Array(rowsA).fill(0).map(() => new Array(colsB).fill(0));

 
    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return result;
}


let A = [
    [1, 2, 3],
    [4, 5, 6]
];

let B = [
    [7, 8],
    [9, 10],
    [11, 12]
];

let C = multiplyMatrices(A, B);
console.log(C);




function isPrime(num) {
    if (num <= 1) return false;  
    if (num === 2) return true;  
    if (num % 2 === 0) return false; 

    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}


console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(29)); // true



function addMatrices(A, B) {
    let rows = A.length;
    let cols = A[0].length;

   
    if (rows !== B.length || cols !== B[0].length) {
        throw new Error("Matrix addition not possible: dimensions must match");
    }

  
    let result = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

   
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[i][j] = A[i][j] + B[i][j];
        }
    }

    return result;
}


let X = [
    [1, 2, 3],
    [4, 5, 6]
];

let Y = [
    [7, 8, 9],
    [10, 11, 12]
];

let D = addMatrices(X, Y);
console.log(D);

