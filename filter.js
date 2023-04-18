// Exercise 1
const numberList = [1, -4, 12, 0, -3, 29, -150];
// Return a new array contains number bigger than 0
console.log(numberList.filter(element => element >0))
// Return a new array contains number less than 10
console.log(numberList.filter(element => element < 10))

// Exercise 2
const number = [25, 45, 55, 77, 88, 99];
// Using filter() to return new array that contains even number
console.log(number.filter(element => element % 2 === 0))

// Using filter() to return new array that contains odd number
console.log(number.filter(element => element % 2 !== 0))
