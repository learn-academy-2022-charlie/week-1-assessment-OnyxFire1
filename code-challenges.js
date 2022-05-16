// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// The goal is to create a function that takes the numbers listed and determine whether they are at, below, or above boiling point

// If temp is > 212 return below boiling point

// If temp is < 212 return above boiling point

// If temp is === 212 return at boiling point


// const temp1 = 42
// const temp2 = 350
// const temp3 = 212


        // const boilingPoint = (number) => {
        // if(number < 212) {
        //     return `${number} is below boiling point`
        // } else if (number > 212) {
        //     return `${number} is above boiling point`
        // } else if (number === 212) {
        //     return `${number} is at boiling point`
    //     }
    // }
        // console.log(boilingPoint(350))
        // console.log(boilingPoint(42))
        // console.log(boilingPoint(212))


// We need to create a code that takes the two arrays and return length 

// .concat will merge both myNumbers1 and myNumbers2

//  comboArrays all the combination length elements will show in the array

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]


//     console.log(myNumbers1.length + myNumbers2.length)

// To get the results of "2022 eilrahC" it was essential to Loop through the Array one end to the other and push everything in the Array. Then use .reverse and .join in the string

//  --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2022 eilrahC"


// const currentCohort = "Charlie 2022"
// let string = "Charlie 2022"
// string = [...string].reverse().join ("")

// Since this is a conditional statement the iteration of index shows the position of an expression match. By using the for loop will let us know where the count index starts, how many iterations we want going through the loop, and what is to be done after each loop.

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

//  const myArray = [13, 34, 5, 10, 27, 42]

//  for(let i=0; i < myArray.length; i==) {
//      if (myArray[i]%2 === 0) 
//          console.log("even")
//      } else {}
//         console.log("odd")


//  In this example the was to take a set of numbers and subtract the smaller from the larget and return an postitive result. I'm not sure how to break this down but when I verified it came back with the required answer.

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
// const number1 = 58
// const number2 = 100

// const getDifference = (num1, num2) => {
    
//     return num2 - num1
// }
// console.log (getDifference (58, 100))

// function

//  Set two:
// const number3 = 27
// const number4 = 24

// const getDifference = (num3, num4) => {
    
//     return num3 - num4
// }
// console.log (getDifference (27, 24))
