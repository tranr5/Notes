// terminal codes
// ls cd mkdir file=make new folder
// touch file= make new file
// code file = open file
// rm file = remove file   rmdir file = remove folder
// at folder I can type "code ."
// control + C to restart


// Visual Studio Code shortcuts
// control + Backtick (`) = brings up terminal
// 
// git add .
// git commit -m "notess"
// node main.js  = runs the code in terminal

// == : Equal to (loose equality)
// === : Strict equal to (checks both value and type)
// != : Not equal to (loose inequality)
// !== : Strict not equal to
// > : Greater than
// < : Less than
// >= : Greater than or equal to
// <= : Less than or equal to
// 4. Logical Operators:
// && : Logical AND
// || : Logical OR
// ! : Logical NOT
// console.log('science'.indexOf('x') === -1)

// if (condition_1) {
//     statement;
// } else if (condition_2) {
//     statement;
// } else (condition_3) {
//     statement;
// }

// let  n = 0;

// while (n < 7) {
//   n++;
// }
// console.log(n)

// let str = ''

// for (let i = 0; i < 5; i++) {
//     str = str + i;
// }

// console.log(str)

// let str = 'pizza'; // try different strings here
// if (str.length > 10) {
//   console.log('long string');
// } else {
//   console.log('short string');
// }
// if (str[0] === 'p') {
//   console.log('starts with p');
// }
// const exampleFunction = () => {
//     const num = 100
//     console.log(num * num)
//   }
  
//   console.log(exampleFunction())   // num is not available outside the function
  

// this code checks for specific number and also checks for if it is an iteger
//   const checkSquare = () => {
//     const num = 25
//     const squareRoot = Math.sqrt(num)
    
//     if (squareRoot % 1===0) {
//         return squareRoot
//     } else {
//         return "not a perfect square"
//     }
    
//   }
// console.log(checkSquare())



// checks if perfect square alll the way to the num i picked
//   const checkSquare = (num) => {
//     const squareRoot = Math.sqrt(num)
    
//     if (squareRoot % 1===0) {
//         return squareRoot
//     } else {
//         return "not a perfect square"
//     }
    
//   }

// const checkNum = (limit) => {
//     // for int = ""
//     for (let i = 1; i <= limit; i++) {
//         console.log(checkSquare(i))
//     }
// }
// checkNum(100)





// 1.1. What is the difference between a parameter and an argument?

// 1.2. Within a function, what is the difference between return and console.log?

// 1. 3. What are the implications of the ability of a function to return a value?

// 2. calculateCube
// function calculateCube(num) {
//     num = num * num * num
//     return num
// }
// console.log(calculateCube(3))
// 3. isAVowel
// function isAVowel(letter) {
//     return['a','A','e','E','i','I','o','O','u','U'].includes(letter)
// }
// console.log(isAVowel('b'))
// 4. getTwoLengths
// function getTwoLengths(word1, word2) {
//     return [word1.length,word2.length]
// }
// console.log(getTwoLengths("dog","pizza"))
// 5. sumArray
// function sumArray(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum = arr[i] + sum 
//     }
//     return sum
// }
// console.log(sumArray([5,5,6,9]))
// 6.1 checkPrime
// function checkPrime(num) {
//     if (num <= 1) return false
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(checkPrime(91))
// 6.2 printPrimes
// function printPrimes(num) {
//     for (let i = 2; i <= num; i++) {
//         if (checkPrime(i) === true) {
//             console.log(i)
//         }
//     }
// }

// 7. printLongestWord
// function printLongestWord(arr) {
//     let longestWord = ''
//     for (let word of arr) { 
//         if (word.length > longestWord.length) {
//             longestWord = word
//         }
//     }
//     return longestWord
// }
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

// module.exports = {
//     calculateCube,
//     isAVowel,
//     getTwoLengths,
//     sumArray,
//     checkPrime,
//     printPrimes,
//     printLongestWord,
//     eulerFibo,
//     findNeedle,
//     sumPositive
// };
// const game = {title: 'Guess the Number!'};
// console.log(game);


let movies = [ 'Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];
movies.splice(2, 0, 'Spaceballs', 'Alien');
// console.log(movies); // [ 'Caddyshack', 'Interstellar', 'Spaceballs', 'Alien', 'Scarface', 'Trading Places' ]

let removedMovies = movies.splice(0, 3);
// console.log(movies); // [ 'Alien', 'Scarface', 'Trading Places' ]
removedMovies = movies.splice(1, 0, 'The Sting', 'Another movie');

// console.log(removedMovies); // []

// console.log(movies); // [ 'Alien', 'The Sting', 'Another movie', 'Scarface', 'Trading Places' ]

// movies.forEach(function (movie) {
//     console.log(movie);
//   });

//   movies.forEach(function (movie, idx) {
//     console.log(idx + ") " + movie);
//   });
for (let movie of movies) {
    if (movie === "The Last Airbender") break;
    console.log(movie);
  }