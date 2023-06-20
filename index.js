// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards


let firstCard
let secondCard
let sum =0
let cards=[]                    //array

let isAlive =false
let message = ""
let hasblackJack=false
let player = {                  //object 
    name: "Player1",
    Chip: 145
}

let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum")
let cardEl=document.getElementById("card-el")


player_perk_EL=document.getElementById("player-el")
player_perk_EL.textContent=player.name + ": $" + player.Chip            //object class usage


function rendergame(){
  
    if (sum <21) {
           message ="Do you want to draw another card?"
    } 
    else if (sum === 21) {
        message= "You got blackjack!"
        hasblackJack = true
     }
    else if (sum > 21) {
        message ="You are out of the game!"
        isAlive = false
    }
    messageEl.textContent=message
    sumEl.textContent = "Sum is: " + sum
    //render out first and second cards
    //cardEl.textContent = "cards: " + cards[0] + ", "  + cards[1]
    //render out all the cards array
    cardEl.textContent = "cards: " + cards
}


function newcard(){
    if (isAlive!= false) {

    thirdCard = GetRandomCard()
    sum  = sum+ thirdCard
    cards.push(thirdCard)
    rendergame()
    }
}

function startgame(){
    isAlive=true
    //generate two random numbers
    //reassign the cards and sum variables so that the game can start
    
    firstCard = GetRandomCard()
    secondCard = GetRandomCard() 
    sum = firstCard + secondCard
    cards =[firstCard,secondCard]

    rendergame()
}

function GetRandomCard()  //return value from function
{
    let randomNum= Math.floor( Math.random()*13 ) + 1
    console.log(randomNum)
    if (randomNum === 1) {
        return 11    //ACE consider 11 at all cases
    }
    else if (randomNum >10){
        return 10   // J, Q, K all considered as 10 
    }
    else{
        return randomNum
    }
}


