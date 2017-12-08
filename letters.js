//begin letter Constructor
function Letter(letter) {
  this.letter = letter;
  this.guessed = false;

} //end fx letter

Letter.prototype.display = function() {
  if (this.guessed === true) {
    return this.letter;
  } else {
    return (" * ");
  }
};

module.exports = Letter;