// Exercise 1

const vegetables = ["garlic", "carrot", "broccoli", "pumpkin"];
// 1. Sort the array in alphabetically
    console.log(vegetables.sort())
    

// 2. What is the length of the array
 console.log(vegetables.length)


// 3. Write a function called myVeggieList to console.log() the length of the array
 const myVeggielist =()=>{
  console.log(vegetables.length)
 
 }

 myVeggielist()

// 4. Push one more item to the array called "onion"
vegetables.push('onion')
console.log(vegetables)

// 5. Write a function using if-else condition to check if the length of the array is bigger than 4.
 const arrayLength =(n)=>{
  if (vegetables.length>n){
    console.log('the length is greater')
  }else{
   console.log('the length is not')
  }
}
arrayLength(4)
// 6.  Using forEach or map to loop and console.log() the item in the array
vegetables.forEach(element => {
  console.log(element)
});

// 7. using slice to remove the element carrot in the array
console.log(vegetables.slice(2))


// Exercise 2
const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

// 1. Get characters with mass greater than 100
for (let i = 0; i < characters.length; i++) {
  const element = characters[i]
  if (element.mass>100) {
    console.log(JSON.stringify(element ) + ' mass value greater')
  } else {
    console.log(JSON.stringify(element ) +  '  mass value less')
  
    
  }
  
  
}

console.log('helo world')

// 2. Get characters with height less than 200
for (let i = 0; i < characters.length; i++) {
  const element = characters[i]
  if (element.height<200) {
    console.log(JSON.stringify(element ) + ' height value here')
  } 
  
  
}
console.log('hello world')

// 3. Get all male characters

for (let i = 0; i < characters.length; i++) {
  const element = characters[i]
  if (element.gender==='male') {
    console.log(JSON.stringify(element ) + ' males gather here')
  } 
  
  
}

console.log('helo world')

// 4. Get all female characters
for (let i = 0; i < characters.length; i++) {
  const element = characters[i]
  if (element.gender==='female') {
    console.log(JSON.stringify(element ) + ' females gather here')
  } 
  
  
}

// Exercise 3
const numberList = [1, 2, 3, 4, 5, 6, 7, 8];
// using reduce method to get the sum of all numbers in the numberList array
console.log(numberList.reduce((a,b) => a + b))


// using find method to get the first element that bigger than 3
console.log(numberList.find(element => element > 3)) 

// using findIndex method to get the index of the first number that smaller than 7
const firstNumber=(element)=> element <7
console.log(numberList.findIndex(firstNumber))
