var words = ["elf", "dwarf", "halfling", "orc", "gnome", "hobbit"]

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var winCount, lossCount = 0;
var wordChoice, wordDisplayed, guessesLeft;

function init() {
    guessesLeft = 10;
    wordChoice = words[Math.floor(Math.random()*words.length)];
    wordDisplayed = "";
    for (var i = 0; i < wordChoice.length; i++) {
        wordDisplayed += "_"
    }
}