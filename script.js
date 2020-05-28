let activePlayer = 0;
let diceRoll;

let dice = document.querySelector("#roll-dice");
let roundScore = document.querySelector("#current-" + activePlayer);

dice.addEventListener("click", function(){
    console.log("clicked", diceRoll = Math.floor(Math.random() * 6 + 1));
    roundScore.textContent = diceRoll;

})




