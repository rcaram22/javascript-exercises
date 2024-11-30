// Write a JavaScript program to find the maximum number in an array. 

const findMaxInArray = arrayOfNumbers => {
    let maxNumber = arrayOfNumbers[0];
    for (let i = 1; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] > maxNumber) {
            maxNumber = arrayOfNumbers[i];
        }
    }
    return maxNumber;
};

const findMaxInArrayPRO = (arrayOfNumbers) => {
    if (!Array.isArray(arrayOfNumbers) || arrayOfNumbers.length === 0) {
        throw new Error('Input must be a non-empty array.');
    }

    return Math.max(...arrayOfNumbers);
};

// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

const onlyEvenNumbers = (numbers) => {
    const evenNumbersArray = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbersArray.push(numbers[i]);
        }
    }
    return evenNumbersArray;
}

const onlyEvenNumbersPRO = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error('Input must be an array');
    }

    return numbers.filter((num) => num % 2 === 0);
};

// Write a JavaScript program to find the largest element in a nested array. 
// Asumo que son todos numeros positivos, si viene algún negativo no funciona

const findLargestElement = (nestedArray) => {
    //Utilizo la funcion previamente definida: findMaxInArray
    let largestElement = 0;
    for (let i = 0; i < nestedArray.length; i++) {
        const maxInArray = findMaxInArray(nestedArray[i]);
        if (maxInArray > largestElement) {
            largestElement = maxInArray;
        }
    }
    return largestElement;
}

const findLargestElementPRO = (nestedArray) => {
    if (!Array.isArray(nestedArray) || nestedArray.some(arr => !Array.isArray(arr))) {
        throw new Error('Input must be an array of arrays containing numbers');
    }

    let largestElement = -Infinity;

    for (let i = 0; i < nestedArray.length; i++) {
        if (nestedArray[i].length > 0) {
            const maxInArray = Math.max(...nestedArray[i]);
            if (maxInArray > largestElement) {
                largestElement = maxInArray;
            }
        }
    }

    return largestElement === -Infinity ? null : largestElement;
};

// Find Common Elements Between Two Arrays (MEDIUM DIFFICULTY)
// Write a function that takes two arrays and returns an array of elements that are present in both arrays.
// Example Input: [1, 2, 3, 4]  [3, 4, 5, 6]
//Expected Output: [3, 4]
const commonElements = (array1, array2) => {
    const commonElementsArray = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                commonElementsArray.push(array1[i]);
            }
        }
    }
    return commonElementsArray;
}

// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions. 
// Example Input: [2,3,7,8,14,22] [1,4,5,9,10,15]
// Example Output: [1,2,3,4,5,7,8,9,10,14,15,22]
const mergeSorted = (array1, array2) => {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < array1.length && j < array2.length) {
        if (array1[i] >= array2[j]) {
            result.push(array2[j]);
            j++;
        } else {
            result.push(array1[i]);
            i++;
        }
    }

    // If any elements remain in array1, push them because they are already ordered
    while (i < array1.length) {
        result.push(array1[i]);
        i++;
    }

    // If any elements remain in array2, push them because they are already ordered
    while (j < array2.length) {
        result.push(array2[j]);
        j++;
    }

    return result;
}

// Funcion que te pasan un INT para usar de ventana, un array de letras => Decime cuantas veces aparece este string en esta ventana
// Parameters:
const windowSize = 3; // The size of the window.
const lettersArray = ['a', 'b', 'c', 'z', 'd', 'a', 'b', 'c', 'a', 'b', 'c']; // The array of letters.
const targetSubstring = 'abc'; // The target substring to search for.
// Expected output: 3

const countOccurrencesInWindow = (windowSize, lettersArray, targetSubstring) => {
    let ocurrences = 0;
    for (let i = 0; i < lettersArray.length && i + windowSize <= lettersArray.length; i++) {
        let window = [];
        for (let j = i; j < i + windowSize; j++) {
            window.push(lettersArray[j])
        }
        ocurrences += window.join('') === targetSubstring;
    }
    return ocurrences;
}

const countOccurrencesInWindowPRO = (windowSize, lettersArray, targetSubstring) => {
    // Handle edge case where window size is larger than the array length
    if (windowSize > lettersArray.length) {
        return 0;
    }

    let occurrences = 0;

    for (let i = 0; i <= lettersArray.length - windowSize; i++) {
        const window = lettersArray.slice(i, i + windowSize).join('');
        if (window === targetSubstring) {
            occurrences++;
        }
    }

    return occurrences;
}

// Write a function that takes an array and returns a new array with the elements in reverse order.
// Example Input: [1, 2, 3, 4]
// Example Output: [4, 3, 2, 1]

const reverseArray = (inputArray) => {
    //Usando la funcion reverse es una papa
    //return inputArray.reverse();
    //Lo hago sin usar reverse:
    const reversedArray = [];
    for (let i = inputArray.length - 1; i >= 0; i--) {
        reversedArray.push(inputArray[i])
    }
    return reversedArray;
}

// Find the Missing Number in a Range
// Task: Given an array containing numbers from 1 to N with one number missing, find the missing number.
// Example Input: [1, 2, 4, 5] (missing 3)
// Example Output: 3
// [1, 2, 3, 4] 

const missingNumber = (inputArray) => {
    inputArray.sort((a, b) => a - b); // Sort numerically in case inputArray is not sorted
    for (let i = 1; i <= inputArray.length; i++) {
        if (i !== inputArray[i - 1]) {
            return i;
        }
    }
    return inputArray[inputArray.length - 1] + 1
}

// 	4.	Sum of All Numbers Divisible by 3 or 5 Below a Given Number
// 	•	Task: Write a function that returns the sum of all multiples of 3 or 5 below a given number.
// 	•	Example Input: 10
// 	•	Example Output: 23 (3 + 5 + 6 + 9)
// 	5.	Flatten an Array
// 	•	Task: Given a nested array, flatten it into a single array.
// 	•	Example Input: [[1, 2], [3, 4], [5]]
// 	•	Example Output: [1, 2, 3, 4, 5]
// 	6.	Check if Two Strings Are Anagrams
// 	•	Task: Write a function that checks if two strings are anagrams (contain the same characters in a different order).
// 	•	Example Input: "listen", "silent"
// 	•	Example Output: true
// 	7.	Find the Maximum Product of Two Numbers in an Array
// 	•	Task: Given an array of integers, find the maximum product that can be obtained by multiplying any two numbers.
// 	•	Example Input: [1, 3, -1, 4, 2]
// 	•	Example Output: 12 (3 * 4)
// 	8.	Remove Duplicates from an Array
// 	•	Task: Write a function that removes duplicate values from an array and returns a new array with unique values.
// 	•	Example Input: [1, 2, 2, 3, 4, 4, 5]
// 	•	Example Output: [1, 2, 3, 4, 5]
// 	9.	Find the Longest Substring Without Repeating Characters
// 	•	Task: Given a string, find the length of the longest substring without repeating characters.
// 	•	Example Input: "abcabcbb"
// 	•	Example Output: 3 (substring "abc")
// 	10.	Merge Two Sorted Arrays
// 	•	Task: Given two sorted arrays, merge them into one sorted array without using built-in sorting functions.
// 	•	Example Input: [1, 3, 5], [2, 4, 6]
// 	•	Example Output: [1, 2, 3, 4, 5, 6]