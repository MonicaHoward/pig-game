let activePlayer = 0;
let diceVal;
let roundScore = 0;

let diceImg = document.querySelector("#dice-img");
let rollDice = document.querySelector("#roll-dice");

diceImg.style.display = 'none';

rollDice.addEventListener("click", function(){
    diceVal = Math.floor(Math.random() * 6 + 1);
    diceImg.style.display = 'inline';
    diceImg.src = './assets/images/dice-' + diceVal + ".png";

    if (diceVal > 1){
        roundScore += diceVal;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        roundScore = 0;
        document.querySelector("#current-" + activePlayer).textContent = 0;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;


        
    }
})




