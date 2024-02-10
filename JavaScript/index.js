let currentPlayer = 1; // Start with player 1
let pointNumber = null; // This will hold the point number if a point is established
let bankroll1 = 50;
let bankroll2 = 50;

// elements for active player
let section1 = document.getElementById("sec-1");
let section2 = document.getElementById("sec-2");

// Get the status elements
let statusElm = document.getElementById("status");
let bankrollElm1 = document.getElementById("BankRoll-h2"); // Assuming you have a similar element for player 2
let bankrollElm2 = document.getElementById("BankRoll-h2-R"); // Add this to your HTML

// Added an event listener to the roll button so it calls a function when clicked
document.getElementById("roll-btn").addEventListener("click", function () {
    // Calculate a random count between 2 and 12
    let count = Math.floor(Math.random() * 11) + 2;
  
    // Calculate a random roll for each dice
    let roll1 = Math.floor(Math.random() * (count - 1)) + 1;
    // Calculate the second roll based on the first roll
    let roll2 = count - roll1;
  
    // If roll2 is out of dice range, recalculate both rolls
    while (roll2 < 1 || roll2 > 6) {
      roll1 = Math.floor(Math.random() * (count - 1)) + 1;
      roll2 = count - roll1;
    }
  




  if (currentPlayer === 1) {
    updateDice('dice', count);
    document.getElementById("count-elm").innerHTML = count;
  } else if (currentPlayer === 2){
    updateDice('dice-R', count);
    document.getElementById("count-elm-R").innerHTML = count;
  }




//   logic for the game and the point number
  if (pointNumber === null) {
    if (count === 7 || count === 11) {
      console.log(`Player ${currentPlayer} wins with a first roll of ${count}!`);
      statusElm.textContent = `Player ${currentPlayer} wins with a first roll of ${count}!`;
      if (currentPlayer === 1){
        bankroll1 += 5;
        bankroll2 -= 5; // Subtract 5 from player 2's bankroll
    } else if (currentPlayer === 2){
        bankroll2 += 5;
        bankroll1 -= 5; // Subtract 5 from player 1's bankroll
    }
    } else if (count === 2 || count === 3 || count === 12) {
      console.log(`Player ${currentPlayer} loses with a first roll of ${count}.`);
        statusElm.textContent = `Player ${currentPlayer} loses with a first roll of ${count}.`;
        if (currentPlayer === 1){ 
            bankroll1 -= 5;
            bankroll2 += 5; // Add 5 to player 2's bankroll
        } else if (currentPlayer === 2){
            bankroll2 -= 5;
            bankroll1 += 5; // Add 5 to player 1's bankroll
        }
      switchPlayer();
    } else {
      pointNumber = count;
      console.log(`Player ${currentPlayer}'s point number is ${pointNumber}.`);
        statusElm.textContent = `Player ${currentPlayer}'s point number is ${pointNumber}.`;
    }
  } else {
    if (count === pointNumber) {
      console.log(`Player ${currentPlayer} wins by rolling the point number ${pointNumber} again!`);
        statusElm.textContent = `Player ${currentPlayer} wins by rolling the point number ${pointNumber} again!`;
        if (currentPlayer === 1){
            bankroll1 += 5;
            bankroll2 -= 5; // Subtract 5 from player 2's bankroll
        } else if (currentPlayer === 2){
            bankroll2 += 5;
            bankroll1 -= 5; // Subtract 5 from player 1's bankroll
        }
      pointNumber = null;
    } else if (count === 7) {
      console.log(`Player ${currentPlayer} loses by rolling a 7.`);
        statusElm.textContent = `Player ${currentPlayer} loses by rolling a 7.`;
        if (currentPlayer === 1){ 
            bankroll1 -= 5;
            bankroll2 += 5; // Add 5 to player 2's bankroll
        } else if (currentPlayer === 2){
            bankroll2 -= 5;
            bankroll1 += 5; // Add 5 to player 1's bankroll
        }
      pointNumber = null;
      switchPlayer();
    }
  }

  bankrollElm1.textContent = `Bankroll: $${bankroll1}`;
bankrollElm2.textContent = `Bankroll: $${bankroll2}`;

  // Update the status elements based on the game state
//   updateDice('dice', count); // update the first dice
  });

  function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    console.log(`It's now Player ${currentPlayer}'s turn.`);
    updatePlayerFields();
  }

//   function for active fields
function updatePlayerFields() {
    if (currentPlayer === 1) {
       section1.classList.add("active-player");
       section1.classList.remove("inactive-player");
       section2.classList.add("inactive-player");
       section2.classList.remove("active-player");
    } else {
       section2.classList.add("active-player");
       section2.classList.remove("inactive-player");
       section1.classList.add("inactive-player");
       section1.classList.remove("active-player");
    }
}

updatePlayerFields();
// end of function for active fields
  
// This function updates the dice based on the count so when the count changes, the dice will change
  function updateDice(diceClass, count) {
    if ((diceClass === 'dice' && currentPlayer === 1) || (diceClass === 'dice-R' && currentPlayer === 2)) {
    // Get the dice elements
    let diceElements = document.getElementsByClassName(diceClass);
  
    // Apply the correct transform to the dice based on the count
    switch (count) {
      case 2:
        diceElements[0].style.transform = 'rotateX(0deg) rotateY(0deg)';
        diceElements[1].style.transform = 'rotateX(0deg) rotateY(0deg)';
        break;
      case 3:
        diceElements[0].style.transform = 'rotateX(0deg) rotateY(0deg)';
        diceElements[1].style.transform = 'rotateX(85deg) rotateY(1deg)';
        break;
      case 4:
        diceElements[0].style.transform = 'rotateX(85deg) rotateY(1deg)';
        diceElements[1].style.transform = 'rotateX(85deg) rotateY(1deg)';
        break;
      case 5:
        diceElements[0].style.transform = 'rotateX(85deg) rotateY(1deg)';
        diceElements[1].style.transform = 'rotateX(174deg) rotateY(88deg)';
        break;
      case 6:
        diceElements[0].style.transform = 'rotateX(174deg) rotateY(88deg)';
        diceElements[1].style.transform = 'rotateX(174deg) rotateY(88deg)';
        break;
      case 7:
        diceElements[0].style.transform = 'rotateX(174deg) rotateY(88deg)';
        diceElements[1].style.transform = 'rotateX(-4deg) rotateY(90deg)';
        break;
      case 8:
        diceElements[0].style.transform = 'rotateX(-4deg) rotateY(90deg)';
        diceElements[1].style.transform = 'rotateX(-4deg) rotateY(90deg)';
        break;
      case 9:
        diceElements[0].style.transform = 'rotateX(-4deg) rotateY(90deg)';
        diceElements[1].style.transform = 'rotateX(-95deg) rotateY(89deg)';
        break;
      case 10:
        diceElements[0].style.transform = 'rotateX(-95deg) rotateY(89deg)';
        diceElements[1].style.transform = 'rotateX(-95deg) rotateY(89deg)';
        break;
      case 11:
        diceElements[0].style.transform = 'rotateX(-95deg) rotateY(89deg)';
        diceElements[1].style.transform = 'rotateX(176deg) rotateY(4deg)';
        break;
      case 12:
        diceElements[0].style.transform = 'rotateX(176deg) rotateY(4deg)';
        diceElements[1].style.transform = 'rotateX(176deg) rotateY(4deg)';
        break;

    }
}
  }




 