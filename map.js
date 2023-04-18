// Exercise 1
const number = [25, 45, 55, 77, 88, 99];
// Using map() to square each number in the array
console.log(number.map(element => element*element))

// Using map() to return a new array the double value of element
console.log(number.map(element => element + element))

// Exercise 2

const strings = ["avengers", "captain america", "iron man", "black panther"];
//   Using map() to return a new array that the first letter in the word would be uppercase
console.log(strings.map(element => element.charAt(0).toUpperCase() + element.slice(1)))
