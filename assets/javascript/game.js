
// created a variable of an array with all possible letters to guess
var computer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// create variables for win, losses, guessed and remaining guesses
var wins = 0;
var loses = 0;
var guessesLeft = 10;
var alreadyGuessed = [];


// // Randomly chooses a choice from computer array 

var computerGuesses = computer[Math.floor(Math.random() * computer.length)];

document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // if/else statements to determine if user has guessed right answer 
    //resets guesses and guessed leters, computer guesses reset and game starts again
    if (userGuess === computerGuesses) {

        wins++;
        guessesLeft = 9;
        document.getElementById("win").innerHTML = wins;

        alreadyGuessed = [];

        computerGuesses = computer[Math.floor(Math.random() * computer.length)];
        console.log(computerGuesses);
    }

    //when user doesnt answer the same as comp. guesses go down and prints out guessed letters 
    else if (userGuess !== computerGuesses) {

        guessesLeft--;
        document.getElementById("remaining-guesses").innerHTML = guessesLeft;

        alreadyGuessed.push(userGuess);
        document.getElementById("guessed").innerHTML = alreadyGuessed;
    }

    //resets guesses and already guessed letters , adds a point to loses, and resets computer guesses 
    if (guessesLeft === 0) {

        loses++;
        guessesLeft = 9;
        alreadyGuessed = [];
        document.getElementById("loss").innerHTML = loses;

        computerGuesses = computer[Math.floor(Math.random() * computer.length)]; console.log(computerGuesses);
    }


};