//Preliminaries
// Write a for loop that prints to the console the 
//numbers 0 through 9.
const numberArray = [0,1,2,3,4,5,6,7,8,9];
for (var i = 0; i < numberArray .length; i++){
    console.log(numberArray[i])
};

// Write a for loop that prints to the console 9 through 0. 
const numberArray2 = [0,1,2,3,4,5,6,7,8,9];
for (var i = 9; i >= 0; i--){
    console.log(numberArray2[i])
}

//Write a for loop that prints these fruits to the console.`const 
//fruit = ["banana", "orange", "apple", "kiwi"]`

const fruit = ["banana", "orange", "apple", "kiwi"];
for ( var i = 0; i < fruit.length; i++){
        console.log(fruit[i])
    }

// Bronze Medal
// Write a for loop that will push the numbers 0 through 9 to an array.

const emptyArray = [];
for ( let i = 0; i < 10; i++){
    test.push([i])
   console.log(emptyArray);

};

//Write a for loop that prints to the console only even numbers 0 through 100.

for ( var i = 0; i <= 100; i += 2){
    console.log([i]);
}

//Write a for loop that will push every other fruit to an array.const 
//fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
const emptyFruitArray =[]
for ( var i = 1; i < fruits.length; i += 2){
    emptyFruitArray.push(fruits[i]);
    console.log(emptyFruitArray);
};

//Silver Medal 
// Write a loop that will print out all the names of the people of the people array
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  for ( var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name)
  }
  
  // Write a loop that pushes the names into a names array, and the occupations into an occupations array.
  const peopleArray2 = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  const names = [];
  const occupation = [];
  for (var i = 0; i < peopleArray2.length; i++){
    names.push(peopleArray2[i].name);
    occupation.push(peopleArray2[i].occupation);
    console.log(names);
    console.log(occupation);
  }

// Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford",
// and every other occupation to another array starting with, in this case, "Singer".

const peopleArray3 = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

const everyOtherName = [];
const everyOtherOccupation = [];

for ( var i = 0; i < peopleArray3.length; i += 2){
    everyOtherName.push(peopleArray3 [i] .name);
    everyOtherOccupation.push(peopleArray3 [i] .occupation);
    console.log(everyOtherName);

}

//Gold Medal - Nesting
//1.Create an array that mimics a grid like the following using nested for loops:
// gotta look up how to run this code correctly 
const arrayGrid1 = [0,0,0];

for ( var i = 0; i < arrayGrid1.length; i += 0){
  for ( var j = 0; j < arrayGrid1.length[i]; j += 0 ){
    arrayGrid1.push([i][j]);
    console.log(arrayGrid1);
  }
};
