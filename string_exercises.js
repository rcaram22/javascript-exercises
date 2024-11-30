// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 
// titleCase('hello world') = "Hello World"
const titleCase = (someText) => {
    let wordArray = someText.split(' ');
    let result = wordArray.map(w => {
        console.log("w[0].toUpperCase(): ", w[0].toUpperCase())
        return w[0].toUpperCase() + w.slice(1);
    });

    return result.join(' ');
}

// Write a JavaScript program to reverse a given string. 

const reverseString = (givenString) => {
    if (typeof givenString !== 'string') {
        throw new Error('Input must be a string');
    }

    let reversedString = '';
    let lastIndex = givenString.length - 1;

    for (let i = lastIndex; i >= 0; i--) {
        reversedString = reversedString.concat(givenString[i]);
    }
    return reversedString;
}

const reverseStringPRO = (givenString) => {
    if (typeof givenString !== 'string') {
        throw new Error('Input must be a string');
    }
    return givenString.split('').reverse().join('');
};

// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

const isPalindrome = word => {
    if (typeof word !== 'string') {
        throw new Error('Input must be a string');
    }

    const wordLength = word.length;
    let index = 0;
    let lastIndex = wordLength - 1;
    while (index < lastIndex) {
        if (word[index] !== word[lastIndex]) {
            return false
        }
        index++;
        lastIndex--;

    }
    return true;
}

// Find the First Non-Repeated Character
// Task: Write a function that returns the first non-repeated character in a string.
// Example Input: "aabcc"
// Example Output: "b"

const firstNonRepeated = (inputString) => {
    for (let i = 0; i < inputString.length; i++) {
        let occurrences = inputString.split('').filter(is => is === inputString[i]).length;
        if (occurrences === 1) {
            return inputString[i];
        }
    }
}

const firstNonRepeatedPRO = (inputString) => {
    if (!inputString || inputString.length === 0) return null;

    for (let i = 0; i < inputString.length; i++) {
        const occurrences = [...inputString].filter(ch => ch === inputString[i]).length;
        if (occurrences === 1) {
            return inputString[i];
        }
    }

    return null; // Explicitly return null if no non-repeated character
};
