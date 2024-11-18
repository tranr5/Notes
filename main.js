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


  const checkSquare = (num) => {
    const squareRoot = Math.sqrt(num)
    
    if (squareRoot % 1===0) {
        return squareRoot
    } else {
        return "not a perfect square"
    }
    
  }

const checkNum = (limit) => {
    // for int = ""
    for (let i = 1; i <= limit; i++) {
        console.log(checkSquare(i))
    }
}
checkNum(100)