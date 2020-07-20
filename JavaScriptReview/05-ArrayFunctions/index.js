// Refer to this for a guide to all array functions https://www.w3schools.com/js/js_array_iteration.asp

const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];

// 1.

// forEach is a functional way of iterating through an array without a for-loop

moviePatrons.forEach(patron => console.log(patron.age));

// 2.

// Filter returns a new array containing only elements whose callback returns a truthy value

const olderThanSeventeen = patron => patron.age > 17;

const canWatchRatedR = moviePatrons.filter(olderThanSeventeen);

// console.log(canWatchRatedR);

// 3.

// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array

const cardPatrons = patron => {
  // Copy the object being iterated over
  const pObj = { ...patron };
  // Do everything else the same
  if (pObj.age >= 17) {
    pObj.canWatchRatedR = true;
  } else {
    pObj.canWatchRatedR = false;
  }
  // Be sure to return the new obj, not the parameter
  return pObj;
};

const cardedMoviePatrons = moviePatrons.map(cardPatrons);

// console.log("Movie Patrons: ")
// console.log(moviePatrons);

// console.log("\nCarded Movie Patrons: ");
// console.log(cardedMoviePatrons);

// 4. 

// Find returns the value of the first array item that passes the test function (the function passed into the find function)

let firstPatron = moviePatrons.find(olderThanSeventeen);

// console.log(firstPatron);

// 5. 

// findIndex will return the index of an item based on the function that you passed in

let cherieIndex = moviePatrons.findIndex(patron => patron.name === "Cherie");

// console.log(cherieIndex);

// Why might this be useful?

let danielIndex = moviePatrons.findIndex(patron => patron.name === "Daniel");

// console.log(danielIndex);

// 6. 

// reduce runs a function on each array element to produce (reduce it to) a single value
// reduce method works from left-to-right in the array (You can do similarly with reduceRight)

const sum = (total, { age }) => total + age;


let averageAge = Math.floor(moviePatrons.reduce(sum, 0) / moviePatrons.length);

console.log(averageAge)



