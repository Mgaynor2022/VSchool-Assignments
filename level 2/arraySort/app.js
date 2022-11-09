//Sort an array from smallest number to largest
const numbers = [1, 3, 5, 2, 90, 20]
numbers.sort(function(a,b){
    return a - b 
})
console.log(numbers)

// Sort an array from largest number to smallest
const numbers2 = [1, 3, 5, 2, 90, 20]
numbers2.sort(function(a,b){
    return b - a 
})
console.log(numbers2)

//Sort an array from shortest string to longest
const strings = ["dog", "wolf", "by", "family", "eaten"]
strings.sort(function(a,b){
    return a.length - b.length
})
console.log(strings)

//Sort an array alphabetically
const sortString = ["dog", "wolf", "by", "family", "eaten"]
sortString.sort()
    
console.log(sortString)

//Sort the objects in the array by age
const ages = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
ages.sort(function(a,b){
    return a.age - b.age

})
console.log(ages)