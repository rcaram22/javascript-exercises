// Write a JavaScript program to calculate the factorial of a given number.

const factorial = (number) => {
    if (number === 0) {
        return 1
    }
    return number * factorial(number - 1);
}


// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
// fibonacci(1) = [0];
// fibonacci(5) = [0, 1, 1, 2, 3];
// fibonacci(10) = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
// Esta la tuve que solucionar con ChatGPT porq no me salía la parte posta de la recursión
const fibonacciUpTo = (term) => {
    if (term === 0) {
        return [];
    }
    if (term === 1) {
        return [0];
    }
    if (term === 2) {
        return [0, 1];
    }

    // Recursive call to get the sequence up to (term - 1)
    const result = fibonacciUpTo(term - 1);

    // Add the next Fibonacci number (sum of the last two numbers)
    const nextNumber = result[result.length - 1] + result[result.length - 2];

    // Return a new array with the next number appended
    return [...result, nextNumber];
};