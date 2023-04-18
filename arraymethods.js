// using includes method

const pets = ["cat", "dog", "bat"];
// write a function to check if the input has the value that is inside the array

function checkName(petName) {
   const element = pets.includes(petName)
   console.log(element)
  }


checkName("cat");
// expected outcome: "the cat is in the list"

checkName("pig");
// expected outcome: "the pig is not in the list"

// using some method
const array = [1, 2, 3, 4, 5];
// write a function to check if the input number is odd or even
 

function checkNumber(element) {
  array.forEach(number => {
    if (number%2==0) {
      console.log(`${number} is even`)
    } else {
      console.log(`${number} is odd`)
    }
  }, element);
   
}

console.log('hello')

  
checkNumber(5);
// expected outcome: "the number 3 is a odd number"
console.log('hello world')

checkNumber(4);
// expected outcome: "the number 4 is a even number"
