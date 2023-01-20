var readline = require('readline-sync');

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

//let input = readline.question('What phrase would you like to encrypt? ').toLowerCase();

//let shift = parseInt(readline.question('How many letters would you like to shift? '));


const encryption = (str,num) => {
    let result = ""
    for(let i =0; i < str.length; i++){
        //if not in the alphabet add it to result
        let notAChar = alphabet.includes(str[i]);

        if(notAChar === false){
            result += str[i]
        } else { // shifting the the letters 
            let letterIndex = 
                alphabet.findIndex((letter) => letter === str[i])
                // If the num of spaces runs out of letters count backwards. 
                result += alphabet[letterIndex + num] || 
                     alphabet[letterIndex - num]
        }
    }
    return result
}

console.log(encryption("MIKEG IS A BOSS",3))