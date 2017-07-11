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
  if (guessesLeft <= 0) {
    losses ++;
    lossesHTML.innerHTML = losses;
    alert("MASTER YODA: Exhausted the number of attempts allowed, you have. Remember, failure leads to anger. Anger leads to hate. Hate leads to the Dark Side. Again! See the new letter in my mind, you must.");
    answer = letters[Math.floor(Math.random() * 25 + 1)];
    guessesLeft = 9;
    console.log("Answer Key: The new answer is " + answer + ".");
    guessesLeftHTML.innerHTML = "10";
    guesses = [];
    guessesHTML.innerHTML = "None"
  } else {
      if (guess.key < "a" || guess.key > "z") {
        alert("MASTER YODA: Not a letter, that is! Again! A letter, you must see.");
      } else if (guess.key.toUpperCase() === answer){
          wins ++;
          winsHTML.innerHTML = wins;
          alert("MASTER YODA: Success! The letter " + guess.key.toUpperCase() + " in my mind, you see! Jedi Master, soon you will become! Again! See the new letter in my mind, you must.")
          answer = letters[Math.floor(Math.random() * 25 + 1)];
          guessesLeft = 9;
          console.log("Answer Key: The new answer is " + answer + ".");
          guessesLeftHTML.innerHTML = "10";
          guesses = [];
          guessesHTML.innerHTML = "None"
        } else {
            guessesLeft --;
            guesses.push(guess.key.toUpperCase());
            guessesHTML.innerHTML = guesses.join(" ");
            guessesLeftHTML.innerHTML = (guessesLeft + 1);
            alert("MASTER YODA: No! The letter " + guess.key.toUpperCase() + " in my mind, there is not. Do, or do not. There is no try! Again!");
          }
    }
});
