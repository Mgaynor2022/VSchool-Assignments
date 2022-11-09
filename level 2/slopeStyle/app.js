// Use a rest operator 
function collectAnimals(...collectAnimals) {
    return collectAnimals
}

console.log(collectAnimals('mouse','platypus','cat'))

// ES6 shorthand syntax

function combineFruit(fruit, sweets, vegetables){
    return {fruit,
            sweets,
            vegetables
    }
}

console.log(combineFruit(['strawberry','blueberry'],
                         ['sweet','candy'],
                        ['carrot"']))

                        
//Use destructuring to use the property names as variables. Destructure the object in the parameter:\
function parseSentence({location,duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
  parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  });

  


  //Use array destructuring to make this code ES6:
  function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6 HAS BEEN CHANGED */
    return firstItem
}

//Write destructuring code to assign variables that will help us return the expected string.
// Also, change the string to be using Template literals

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are, ${firstFav} , ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities))

//Use the Rest and Spread Operator to help take any number of arrays, and return one array.
// You will need to change how the arrays are passed in

function combineAnimals(arr1,arr2,arr3) {
    const joinedArray = [...arr1, ...arr2, ...arr3];
    return joinedArray
};

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

//Try to make the following function more ES6y:
const product = (...a) => {
        let numbers = [a,b,c,d,e];
        numbers.reduce((acc, number) => {
            acc * number;
    }, 1)
  }
  
  
//Make the following function more ES6y. Use at least both the rest and spread operators:

const unshift = (array, a, b, c, d, e) =>  [a, b, c, d, e, ...array];
  
  //Write some destructuring code to help this function out. 
  //Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

  const populatePeople = (names) => {
        return names.map(name => {
            name = name.split(" ");
            const [firstName, lastName] = name
            return {
                firstName, lastName
            }
        })
    }
   
    console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))