var words = ["elf", "dwarf", "halfling", "orc", "gnome", "hobbit"]

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var winCount, lossCount = 0;
var wordChoice, wordDisplayed, guessesLeft;

var guessesElement = document.getElementById("letters-guessed");
var displayedElement = document.getElementById("displayed-word");
var targetElement = document.getElementById("target-word");
console.log(targetElement)

function init() {
    guessesLeft = 10;
    wordChoice = words[Math.floor(Math.random()*words.length)];
    targetElement.textContent = wordChoice;
    wordProgress = "";
    for (var i = 0; i < wordChoice.length; i++) {
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


init()