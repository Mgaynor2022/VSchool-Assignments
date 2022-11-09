// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
const numbers = [ 3,8,9,19,4,6,1,0]
const result1 = numbers.filter(function(number){
    if(number > 5){
        return true 
    }
})
console.log(result1)

// Given an array of numbers, return a new array that only includes the even numbers.
const result2 = numbers.filter(function(number){
    if(number % 2 === 0){
        return true
    }
})
console.log(result2)

// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
const strings = ["dog", "wolf", "by", "family", "eaten", "camping"]
const result3 = strings.filter(function(string){
    if(string <= string.slice(0,5)){
        return true
    }
})
console.log(result3)

// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
const peopleObjects = 
[
{ name: "Angelina Jolie", member: true },
{ name: "Eric Jones", member: false },
{ name: "Paris Hilton", member: true },
{ name: "Kayne West", member: false },
{ name: "Bob Ziroll", member: true }
]
const result4 = peopleObjects.filter(function(peopleObject){
    if(peopleObject.member === true){
        return true
    }
})
console.log(result4)

//) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
const matrixAges = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const result5 = matrixAges.filter(function(matrixAge){
    if(matrixAge.age > 18){
        return true
    }
})
console.log(result5)
