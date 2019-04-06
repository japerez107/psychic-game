
// created a variable of an array with all possible letters to guess
var computer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// create variables for win, losses and guessed and remaining guess
var wins = 0;
var loses = 0;
var guessesLeft = 9;
var alreadyGuessed;





// // Randomly chooses a choice from computer array 

var computerGuesses = computer[Math.floor(Math.random() * computer.length)];
console.log(computerGuesses);




document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    if (userGuess === computerGuesses) {
        wins++;
        
        document.getElementById("win").innerHTML = wins;

    }

    else if (userGuess !== computerGuesses) {
        loses++ && guessesLeft--;
    
        document.getElementById("loss").innerHTML = loses;

        document.getElementById("remaining-guesses").innerHTML = guessesLeft;

    }



    console.log(wins);

    console.log(loses);

    console.log(guessesLeft);

};