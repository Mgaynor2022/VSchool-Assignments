//Turn an array of numbers into a total of all the numbers
const numbers = [1,2,3,7,9]
const result = numbers.reduce(function(a,b){
    return a + b 
})
console.log(result)

//Turn an array of numbers into a long string of all those numbers.
// come back to this one
const result2 = numbers.reduce(function(final, number){
    final += number
    return final
},[])
console.log(result2)

// Turn an array of voter objects into a count of how many people voted
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const result3 = voters.reduce(function(final, voter){
    if(voter.voted){
        final++
    }
    return final
},0)
console.log(result3)

//Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
//come back to this one
const wishlists = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const result4 = wishlists.reduce(function(final, wishlist){
    final += wishlist.price
    return final
},0)
console.log(result4)

//Given an array of arrays, flatten them into a single array
// figure out how to make them strings
const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const result5 = arrays.reduce(function(final, array){
   final += array.concat()
    return final
},[])
console.log(result5)