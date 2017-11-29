var inquirer = require("inquirer");

var guessesLeft;

//begin word constructor
function Word(length) {
  this.length = length;
} //end fx word

var apple = new Word(5);
var banana = new Word(5);
var plum = new Word(4);
var pear = new Word(4);
var grape = new Word(5);
var pineapple = new Word(9);



var wordArray = ["apple", "banana", "plum", "pear", "grape", "pineapple"];

var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

var randomWordLength = randomWord.length;

console.log(randomWordLength);


//begin letter Constructor
function Letter() {

} //end fx letter



//begin question logic
var questionsArr = [{
    name: "guess",
    type: "input",
    message: "what's your guess?",
  },

  {
    name: "playAgain",
    type: "prompt",
    message: "what's your guess?",
  }

];


// inquirer.prompt(questionsArr).then(answers => {
//
//   // if (questionsArr.guess === parseString(word.length)) {}
//
//   // console.log(JSON.stringify(answers, null, 2));
//
// });
//end question logic

//testing
// var str = "I have many cars";
// while (str.indexOf(' ') > 0) {
//   str = str.replace(' ', '');
// }
// var strLength = str.length;
// console.log(strLength);