let activePlayer = 0;
let diceVal;

let diceEl = document.querySelector("#roll-dice");
let roundScore = document.querySelector("#current-" + activePlayer);

dice.addEventListener("click", function(){
    console.log("clicked", diceVal = Math.floor(Math.random() * 6 + 1));
    roundScore.textContent = diceVal;

})




