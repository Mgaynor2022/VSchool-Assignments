//Make an array of numbers that are doubles of the first array
const arr = [2, 5, 100]
const result = arr.map(function(item){
    return item * 2
    }
)
console.log(result)

// Take an array of numbers and make them strings
const arr2 = [2, 5, 100]
const result2 = arr2.map(function(str){
    return str + ""
    }
)
console.log(result2)

// Capitalize the first letter of each name and make the rest of the characters lowercase
const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const result3 = names.map(function(capString){
    return capString[0].toUpperCase() + capString.slice(1).toLowerCase()
})

console.log(result3)

const objectNames = 
[{name: "Eric Jones",
age: 2
},
{
name: "Paris Hilton",
age: 5
},
{
name: "Kayne West",
age: 16
},
{
name: "Bob Ziroll",
age: 100
}
]

const result4 = objectNames.map(function(objectName){
    return objectName.name
})
console.log(result4)


// If they can go into the Matrix ! 
const result5 = objectNames.map(function(objectName){
    if(objectName.age > 10){
        return objectName.name +' '+ "can go into the Matrix ! "
    } else {
       return objectName.name +' '+ "they are to young to go into the Matrix !"
    }
})
console.log(result5)

//Make an array of the names in h1s, and the ages in h2s
const result6 = objectNames.map(function(objectName){
    return `<h1 ${objectName.name} </h1><h2 ${objectName.age}</h2>`
})

console.log(result6)