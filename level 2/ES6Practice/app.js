// Changed every var to let
let name = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    let name
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
         name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


//Re-write this .map() using an arrow function:


const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {
        return ({ type: "carrot", name: carrot });
    })
}

console.log(mapVegetables(carrots))


    //Re-write this .filter() ’s callback function using an arrow function:
    const people = [
        {
            name: "Princess Peach",
            friendly: false
        },
        {
            name: "Luigi",
            friendly: true
        },
        {
            name: "Mario",
            friendly: true
        },
        {
            name: "Bowser",
            friendly: false
        }
    ]
    
   
    let myFunction = arr => {
    const test = arr.filter( arr => arr.friendly)
    console.log(test)
    }

    myFunction(people)


    //Re-write the following functions to be arrow functions:
    const doMathSum = (a, b) => a + b
    
    
    var produceProduct = (a, b) => a * b

    //Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
    let firstName = 'Jane'
    let lastName = 'Doe'
    let age2 = 100
    const printString = (firstName, lastName, age2) =>{ const test3 = `Hi ${firstName} ${lastName}, how does it feel to be ${age2}`
console.log(test3)}
    
    printString(firstName,lastName,age2)