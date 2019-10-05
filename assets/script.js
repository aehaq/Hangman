var words = ["elf", "dwarf", "halfling", "orc", "gnome", "hobbit"]

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var winCount = 0;
var lossCount = 0;
var targetWord, wordDisplayed, guessesLeft, lettersGuessed;

var guessesElement = document.getElementById("letters-guessed");
var displayedElement = document.getElementById("displayed-word");
var winElement = document.getElementById("win-count");
var lossElement = document.getElementById("loss-count");
var leftElement = document.getElementById("guesses-left");

function init() {
    guessesLeft = 10;
    lettersGuessed = [];
    targetWord = words[Math.floor(Math.random()*words.length)];

    guessesElement.textContent = lettersGuessed;
    leftElement.textContent = guessesLeft;
    winElement.textContent = winCount;
    lossElement.textContent = lossCount;

    wordProgress = "";
    for (var i = 0; i < targetWord.length; i++) {
        wordProgress += "_";
    }
    convertString(wordProgress);
}

function convertString(string) {
    wordDisplayed = "";
    for (let i = 0; i < string.length; i++) {
        wordDisplayed += string[i];
        if (i != string.length - 1) {
            wordDisplayed += " "
        }
    }
    displayedElement.textContent = wordDisplayed
}

document.onkeydown = function(event) {
    var guess = event.key;
    console.log(guess)

    // Check if guess is valid letter
    if (letters.indexOf(guess) > -1 && lettersGuessed.indexOf(guess) < 0) {
        lettersGuessed.push(guess);
        guessesLeft -= 1;

        guessesElement.textContent = lettersGuessed;

        for (var i = 0; i < targetWord.length; i++) {
            if (targetWord[i] == guess) {
                wordProgress = wordProgress.substring(0, i) + guess + wordProgress.substring(i+1);              
            }
        }
        convertString(wordProgress)
        
    } else {
        // invalid guess
        console.log("Guess a letter that has not been guessed yet")
    }
    
}

document.onkeyup = function() {

    if (wordProgress == targetWord) {
        alert("YOU WON!")
        winCount += 1
        init();
    } else {
        
        leftElement.textContent = guessesLeft;
        if (guessesLeft < 1) {
            lossCount += 1;
            init();
        }
    }
}

init()