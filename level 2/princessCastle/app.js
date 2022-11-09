
alive = true 

class Player {
    constructor(name, totalCoins = 0 , status, hasStar = 'False'){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        
    }
    setName(namePicked,){
        namePicked = this.name
        console.log(this.name)
        
    }
    gotHit(){
        if(this.status ==='Powered Up'){
            this.status = 'Big'
        } else if (this.status ==='Big'){
            this.status == 'Small'
        } else if (this.status == 'Small'){
            this.status === 'Dead'
            alive = false
        }
         
    }
    gotPowerUp(){
        if(this.status ==='Small'){
            this.status = 'Big'
        } else if (this.status ==='Big'){
            this.status == 'Powered Up'
        } else if (this.status === 'Powered Up'){
            this.hasStar == 'True'
            
        }
        
    }
    addCoin(){
        let coins = Math.floor(Math.random()*10);
        this.totalCoins = coins;
    };
    print(){
        console.log(`Name: ${this.name}, Total Coins: ${this.totalCoins},Status: ${this.status},Star:${this.hasStar}`)
    }
}

// Create a function that makes a new player and has a setInterval 


let game = () => {
    const mario = new Player('Mario',5,'Small')
    randomRange = () => {
        let random = Math.floor(Math.random()*3);
        if(random === 0){
            gotHit()
            print()
        } else if (random === 1){
            gotPowerUp()
            print()
        } else {
            addCoin()
            print()
        }
    }

}

console.log(game())