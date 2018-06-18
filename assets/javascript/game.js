

GameObject = {
  words : ["Word","TestWord","MoreWords"],
  totalGames : 0,
  triesLeft : 0,
  gamesWon : 0,
  gamesLost : 0,
  triedWords: [],
  // It's a shame but the "this" scope won't work, because all that code is basically existing upon the document.body
  eventListener: document.body.addEventListener('keyup', function() {
    $("#lastLetter").html(event.key);
    if (event.key != "Control" && event.key != "Tab" && event.key != " "){
      $("#triesLeft").html(() => GameObject.triesLeft--);
      $("#triedWords").html(() => {GameObject.triedWords.push(event.key.toUpperCase() + " ");return GameObject.triedWords});
      if(GameObject.triesLeft == 0) {
        GameObject.initializeGame();
        GameObject.totalGames++;
        $("#totalGames").html(GameObject.totalGames);
      }
    };
  }, false),
  counter: function() {
  },

  initializeGame: function() {
    this.triedWords = [];
    $("#triedWords").html(this.triedWords);
    this.selector = Math.floor(Math.random()*GameObject.words.length);
    this.selectedWord = this.words[this.selector];
    this.triesLeft = this.selectedWord.length + (Math.floor(Math.random() * 5) + 1);
    this.triedWords = [];
    $("#triesLeft").html(this.triesLeft);
    var underscoreHolder = document.getElementById("underscoreHolder");
    // Erase whatever is there already when this runs
    underscoreHolder.innerHTML = "";
    for(i=0;i<this.words[this.selector].length;i++) {
      var x = document.createElement('span');
      var y = document.createTextNode("_ ");
      x.setAttribute("id",this.words[this.selector][i].toLowerCase());
      x.appendChild(y);
      underscoreHolder.appendChild(x);
    }
  }
}
//Use that selector # in the future to get the word from the wordlist, and tie it to those created divs.

GameObject.initializeGame()
