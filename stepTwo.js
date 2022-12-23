// Step 2: Write Code
// Work through the following problems in Javascript (you have seen these problems before). Create a new file for your code. When you have finished with each function, leave a code comment with what you believe the runtime of your code to be.


// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

console.log("--------------------------------------");

console.log("Problem 1");

const addToZero = (arr) => {
	let result = false;
	for (let i = 0; i < arr.length; i++) {
		for (let k = 0; k < arr.length; k++) {
			if (i !== k) {
				if (arr[i] + arr[k] === 0) {
					result = true;
				}
			}
		}
	}
	return result;
};

console.log(addToZero([1, 2, 3, -2]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1]));
console.log(addToZero([]));

// Runtime of this function: O(n^2), 3 ms
// Extra Credit: Space Complexity of this function: O(n^2)

console.log("Runtime of this function: O(n^2), 3 ms");
console.log("Extra Credit: Space Complexity of this function: O(n^2)");

console.log("--------------------------------------");

console.log("Problem 2");

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

const hasUniqueChars = (str) => {
	let unique = new Set([]);

	for (let i = 0; i < str.length; i++) {
		unique.add(str[i]);
	}
	return unique.size === str.length;
};

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));

// Runtime of function: O(1), 50 μs
// Extra Credit: Space Complexity of function: O(1)

console.log("Runtime of function: O(1), 50 μs");
console.log("Extra Credit: Space Complexity of function: O(1)");

console.log("--------------------------------------");

console.log("Problem 3");

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

const isPangram = (str) => {
	let lowercase = str.toLowerCase();
	let alpha = "abcdefghijklmnopqrstuvwxyz";
	let alphabetSplit = alpha.split("");

	for (let i = 0; i < alphabetSplit.length; i++) {
		if (lowercase.indexOf(alphabetSplit[i]) < 0) {
			return false;
		}
	}
	return true;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

// Runtime of function: O(n), 90 μs
// Extra Credit: Space Complexity of function: O(n)

console.log("Runtime of function: O(n), 90 μs");
console.log("Extra Credit: Space Complexity of function: O(n)");

console.log("--------------------------------------");

console.log("Problem 4");

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

const findLongestWord = (arr) => {
	let longestWord = "";
	for (let i = 0; i < arr.length; i++) {
		if (longestWord.length < arr[i].length) {
			longestWord = arr[i];
		}
	}
	return longestWord.length;
};

console.log(findLongestWord(["hi", "hello"]));

// Runtime of function: O(n), 7 ms
// Extra Credit: Space Complexity of function: O(1)

console.log("Runtime of function: O(n), 7 ms");
console.log("Extra Credit: Space Complexity of function: O(1)");

console.log("--------------------------------------");