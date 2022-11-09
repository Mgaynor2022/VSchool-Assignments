const btn = document.getElementById('speedClick')
let numOfClicks = 0

const test = btn.addEventListener("click",function(){
    numOfClicks ++
    const displayCount = document.createElement('div')
    displayCount.textContent = numOfClicks
    document.getElementsByTagName('body')[0].append(displayCount)
    

// Saved clickCount to localStorage
    localStorage.setItem('clickCount',numOfClicks)

 // Extra credit    
// Put a countdown timer (10-30 seconds) on the page 
//that stops the user's clicks from counting towards the total after the timer ends.

    }
)
