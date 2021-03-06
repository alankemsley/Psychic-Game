var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var answer = letters[Math.floor(Math.random() * 25 + 1)];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];
var winsHTML = document.getElementById("wins");
var lossesHTML = document.getElementById("losses");
var guessesLeftHTML = document.getElementById("guessesLeft")
var guessesHTML = document.getElementById("guesses");
console.log("Answer Key: The answer is " + answer + ".");
window.addEventListener("keyup", (guess) => {
  //First condition: Check whether the player still has tries left.
  if (guessesLeft <= 0) {
    losses ++;
    lossesHTML.innerHTML = losses;
    alert("FAILURE! Remember: Failure leads to anger, anger leads to hate, hate leads to the Dark Side. Again! Guess the new letter in my mind, you must.");
    answer = letters[Math.floor(Math.random() * 25 + 1)];
    guessesLeft = 9;
    console.log("Answer Key: The new answer is " + answer + ".");
    guessesLeftHTML.innerHTML = "10";
    guesses = [];
    guessesHTML.innerHTML = "-"
  } else {
      //Second condition: Check whether the player pressed a letter key.
      if (guess.key < "a" || guess.key > "z"){
        alert("Stutter, did I? A letter, you must guess.");
        //Third condition: Check if the player won.
      } else if (guess.key.toUpperCase() === answer){
          wins ++;
          winsHTML.innerHTML = wins;
          alert("SUCCESS! The letter " + guess.key.toUpperCase() + ", it is! Jedi Master, soon you will become! Again! Guess the new letter in my mind, you must.")
          answer = letters[Math.floor(Math.random() * 25 + 1)];
          guessesLeft = 9;
          console.log("Answer Key: The new answer is " + answer + ".");
          guessesLeftHTML.innerHTML = "10";
          guesses = [];
          guessesHTML.innerHTML = "-"
        } else {
            guessesLeft --;
            guesses.push(guess.key.toUpperCase());
            guessesHTML.innerHTML = guesses.join(" ");
            guessesLeftHTML.innerHTML = (guessesLeft + 1);
            alert("The letter " + guess.key.toUpperCase() + ", it is not. Do, or do not. There is no try!");
          }
    }
});
