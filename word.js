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
};

Word.prototype.display = function() {
  var myStr = "";

  for (var i = 0; i < this.lettersArray.length; i++) {
    myStr += this.lettersArray[i].display();
  }

  return myStr;
};

module.exports = Word;