let activePlayer = 0;
let diceVal;

let diceImg = document.querySelector("#dice-img");
let rollDice = document.querySelector("#roll-dice");
let roundScore = document.querySelector("#current-" + activePlayer);

diceImg.style.display = 'none';

rollDice.addEventListener("click", function(){
    console.log("clicked", diceVal = Math.floor(Math.random() * 6 + 1));
    roundScore.textContent = diceVal;
    diceImg.style.display = 'inline';
    diceImg.src = './assets/images/dice-' + diceVal + ".png";
})




