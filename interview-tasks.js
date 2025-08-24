// 1. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reverse:", reverseString("hello")); // "olleh"

// 2. Check Palindrome
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log("Palindrome:", isPalindrome("madam")); // true

// 3. Find the Largest Number in an Array
function largestNumber(arr) {
    return Math.max(...arr);
}
console.log("Largest:", largestNumber([10, 45, 67, 23])); // 67

// 4. Find Factorial (Recursion)
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial(5):", factorial(5)); // 120

// 5. Fibonacci Sequence (First n terms)
function fibonacci(n) {
    const seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
}
console.log("Fibonacci:", fibonacci(7)); // [0,1,1,2,3,5,8]

// 6. Remove Duplicates from Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("Unique:", removeDuplicates([1,2,2,3,4,4,5])); // [1,2,3,4,5]

// 7. Count Occurrences of Each Character
function countChars(str) {
    const map = {};
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }
    return map;
}
console.log("Count:", countChars("programming"));

// 8. Find Common Elements in Two Arrays
function findCommon(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}
console.log("Common:", findCommon([1,2,3], [2,3,4])); // [2,3]

// 9. Check Prime Number
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("Prime(7):", isPrime(7)); // true

// 10. Find Second Largest Number
function secondLargest(arr) {
    const unique = [...new Set(arr)].sort((a, b) => b - a);
    return unique[1];
}
console.log("Second Largest:", secondLargest([10, 20, 4, 20, 5])); // 10
