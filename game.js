var inquirer = require("inquirer");
var Word = require("./word.js");

var guessesLeft;
//
//
//
// var apple = new Word(5);
// var banana = new Word(5);
// var plum = new Word(4);
// var pear = new Word(4);
// var grape = new Word(5);
// var pineapple = new Word(9);



var wordArray = ["apple", "banana", "plum", "pear", "grape", "pineapple"];

var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

var currentWord = new Word(randomWord);

var randomWordLength = randomWord.length;

// currentWord.lettersArray[2].guessed = true;

gameLoop = function() {};

console.log("Guess this word: ", currentWord.display());


//notes
//loop thru array and compare letters with guessed, then turn to true
//create search method for this.
//check if solved; see if word is solves, use loop to check if all guesses ar true, then restart game?

//begin question logic
var questionsArr = [{
    name: "guess",
    type: "input",
    message: "what's your guess?",
  },

  {
    name: "playAgain",
    type: "confirm",
    message: "would you like to play again?",
    default: "yes"
  }

];

inquirer.prompt(questionsArr).then(answers => {

  // if (questionsArr.guess === parseString(word.length)) {}
  //
  // console.log(JSON.stringify(answers, null, 2));

});
//end question logic