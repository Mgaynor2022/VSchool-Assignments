const readline = require("readline-sync");

let playerHp = 100; 
let enemyHp = 100;

const playerDamage = Math.floor((Math.random()* 50) + 1)
const enemyDamage = Math.floor(( Math.random()* 100) + 70)

let remainingEnemyHp = enemyHp - enemyDamage;
let remainingPlayerHp = playerHp - playerDamage;

const enemyDamage2 = Math.floor((Math.random()* 35) + 20)
let remainingEnemyHp2 = remainingEnemyHp - enemyDamage2;
const userName = readline.question("Hello !! Whats your name?");

console.log( `Hi ${userName} I hope your sitting down, this game will knock you of your feet !!`);

function User (playerHp, playerDamage,playerName, inventory){
    this.playerHp=100;
    this.playerDamage= playerDamage;
    this.playerName = userName;
    this.inventory=[];
}

 const michael = new User(100,playerDamage,userName)
console.log(michael)
// const userName = readline.question("Hello !! Whats your name?");

// console.log( `Hi ${userName} I hope your sitting down, this game will knock you of your feet !!`);

    let alive = true;

    function walk (){
    const walking = readline.question(`${userName} please enter "w" to walk into the forest.`)
    
        let random = Math.floor((Math.random()* 4) + 1)
     
    while (alive === true)
        if(walking === "w" && random === 1){
        console.log(
            `Oh No !!!! ${userName} a Wild enemy has appeared !!`)
            enemyAppears()
        alive = false; 
    
    } else if (walking === "w" && random > 1){
        continueWalking()
        break;
     }
    }
walk()


function continueWalking (){
    const conWalking = readline.question("Please enter 'w' to continue walking.")
    if (conWalking === 'w'){
        enemyAppears()
    }
    
}

// Pulling a random item from the enemies array.
function enemyAppears (){
    let enemies = 
    ['Evil Elf Lord',
    'Level 5 Demon',
    'Dark Wizard'];
    
    // This is going to choose a random enemy name from the array.
    let randomEnemy = Math.floor(Math.random() * enemies.length)
    let item = enemies[randomEnemy];
    
    let options = 
    ['Run',
    'Attack'];
    
    const fighting = readline.keyInSelect(
        options,` Wait !! ${userName} That is a ${item}. What do you want to do?`)
        
        if(options[fighting] === 'Attack'){
            attack();
        } else if (options[fighting] === 'Run'){
            run();
        }
       
}

function attack (){
    
        const attackMoves = 
        ['Sprit Punch',
        ' Titan Form ',
        'Water Breathing 5th Form'];

        const enemyMoves =
         ['Dragon Breath',
         'Demon Fist',
         'Soul Taker']

    
    let randomAttack = Math.floor( Math.random() * attackMoves.length)
    let attackItem = attackMoves[randomAttack];
    
    let enemyAttack = Math.floor(Math.random() * enemyMoves.length)
    let enemyItem = enemyMoves[enemyAttack];

while (alive === true){

    console.log(`${userName} you decided to use ${attackItem} to attack your enemy.Which gave out ${enemyDamage} damage to the enemy health points`)
    console.log('            ')

    console.log(`The enemy used ${enemyItem} as there attack. It took ${playerDamage} of your health points.`)

    console.log('            ')
    console.log(`Player's Health: ${remainingPlayerHp}`)
    console.log(`Enemy's Health: ${remainingEnemyHp}`)
    console.log('            ')

if(remainingPlayerHp < 20)
{console.log(`${userName} that last attack was a special attack which makes you faint while it drains your hp to zero. 
Sorry you are dead This is the end my friend see you in Valhalla !!!`)

} else if(remainingEnemyHp <= 20){
    console.log(
`${userName} that last attack killed the enemy, it makes them faint and stop breathing. You did it you Won !!! `)
youWin()

if (remainingEnemyHp > 20){
    const attack2 = readline.question((`${userName} that attack didn't kill ${enemyItem} type 'attack' to strike again.`))
    attack2()
    }
} 

 return
    }
}


// Writing a function if player runs the they have 50% of escaping 
function run (){
    let randomEscape = Math.floor(Math.random() * 2);
    
    if(randomEscape === 0){
        console.log(`${userName} look you escaped !!!`)
        continueWalking();
    

    } else if (randomEscape === 1) {
        console.log(`${userName} you didn't escape !!! You must fight to the death !`)
        console.log("      ")
        attack();
    
    }
    
}


function youWin (){
    const victory = readline.question(`${userName} for defeating your enemy you have been rewarded 20+ hp and a special item.
    Type 'Print' or 'p' to view your inventory`)

    if(victory === 'Print' || victory === 'p'){
        console.log('Item: Sword Of The King')
        console.log(`Player hp: ${remainingPlayerHp + 20}`)
    }
}

function attack2 (){
            const attackMoves2 = 
        ['Sprit Punch',
        ' Titan Form ',
        'Water Breathing 5th Form'];

        const enemyMoves =
         ['Dragon Breath',
         'Demon Fist',
         'Soul Taker']

    
    let randomAttack2 = Math.floor(
        Math.random() * attackMoves2.length)
    let attackItem2 = 
        attackMoves2[randomAttack2];
    
  console.log(`${userName} you decided to attack again with ${attackItem2} that gave ${enemyDamage2} to the enemy health points`)
        console.log( `Enemy's Health: ${remainingEnemyHp2}`)
  youWin()

}

