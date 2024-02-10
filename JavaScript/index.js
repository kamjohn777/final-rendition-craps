const elDiceOne = document.getElementById('dice1');
const elDiceTwo = document.getElementById('dice2');
const elButton = document.getElementById('roll-btn');

elButton.onclick = function(){rollDice();};

function rollDice(){
    let diceOne = Math.floor(Math.random() * 6) + 1;
    let diceTwo = Math.floor(Math.random() * 6) + 1;

    for (let i = 1; i <= 6; i++){
       elDiceOne.classList.remove('show-' + i);
       if (diceOne === i){
           elDiceOne.classList.add('show-' + i);
       }
    }

    for (let k = 1; k <= 6; k++){
        elDiceTwo.classList.remove('show-' + k);
        if (diceTwo === k){
            elDiceTwo.classList.add('show-' + k);
        }
    }
    setTimeout(rollDice, 1000)
}