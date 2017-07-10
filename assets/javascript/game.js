var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var answer = letters[Math.floor(Math.random() * 25 + 1)];
console.log("The answer is " + answer + ".");
var wins = 0;
var losses = 0;
var guessesLeft = 9;
window.addEventListener("keyup", (guess) => {
  if (guess.key.toUpperCase() == answer){
    wins ++;
    console.log("Your guess of " + guess.key.toUpperCase() + " was correct!");
    alert("Your guess of " + guess.key.toUpperCase() + " was correct! Let's play again! Try to guess the new letter I'm thinking of now.")
    answer = letters[Math.floor(Math.random() * 25 + 1)];
    console.log("The new answer is " + answer + ".");
    guessesLeft = 9;
  } else if (guessesLeft <= 0) {
      losses ++;
      alert("Game Over! You have reached the number of guesses allowed! Shall we try again? Try to guess the new letter I'm thinking of now.");
      answer = letters[Math.floor(Math.random() * 25 + 1)];
      console.log("The new answer is " + answer + ".");
      guessesLeft = 9;
    } else {
        guessesLeft --;
        console.log("The answer is " + answer + ".");
        console.log("Your last guess of " + guess.key.toUpperCase() + " was incorrect. Keep trying!")
      }
});
