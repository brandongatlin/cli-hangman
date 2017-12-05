var Letter = require("./letters.js");

//begin word constructor
function Word(randomWord) {
  this.length = randomWord.length;
  this.word = randomWord;
  this.wordArray = randomWord.split("");
  this.lettersArray = this.makeLettersArray();
} //end fx word

Word.prototype.makeLettersArray = function() {
  var myArr = [];

  for (var i = 0; i < this.wordArray.length; i++) {
    myArr.push(new Letter(this.wordArray[i]));
  }

  return myArr;
}; //end makeLettersArray

Word.prototype.display = function() {
  var myStr = "";

  for (var i = 0; i < this.lettersArray.length; i++) {
    myStr += this.lettersArray[i].display();
  }

  return myStr;
}; //end display method

//loop thru array and compare letters with guessed, then turn to true
//create search method for this.

// Word.prototype.search = function() {
//   for (var i = 0; i < this.lettersArray.length; i++) {
//     if (this.guess === true) {
//       return this.letter;
//     }
//   }
// }; //end search method

module.exports = Word;