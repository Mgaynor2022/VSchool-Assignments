
let people = ["Michael", "Justin", "Jordan", "Patrice"]
let alphabet = "abcdefghijklmnopqrstuvwxyz"


function force (){
    let array = [];
    
    for(let  i = 0; i < people.length; i++){
        array.push(people[i]);
    }
    for(let j = 0; j < alphabet.length; j++){
        array.push(alphabet[j])

        console.log(array)
       

    }
}

console.log(force())