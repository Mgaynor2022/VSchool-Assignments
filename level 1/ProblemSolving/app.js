//Write a function that takes an array of numbers 
//and returns the largest (without using Math.max())

function maxNum (arr){
   let num = [0]
    for(let i = 0; i < arr.length; i++)
    if(arr[i] > num){
        num = arr[i]
    }
    console.log(num)
}

maxNum([1,4,8,10,5,7]); 

//Write a function that takes an array of words and a character 
//and returns each word that has that character present.

function findWord (arr,stringInput){
    let foundWord = []
    for(let i = 0; i < arr.length; i++)
    if(arr[i].includes(stringInput)){
        foundWord.push(arr[i])

    }
        return foundWord;
    }
    
console.log(findWord(["#3", "$$$", "C%4!", "Hey!"], "!"))
    


//Write a function that takes a num1 and num2
//and returns whether num1 is divisible by num2.

function div (num1, num2){
    if ( num1 % num2 === 0){
        return "True"
    } else { return 'False'
    }}
        
console.log(div(0,10))



