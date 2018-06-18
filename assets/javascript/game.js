

GameObject = {
  words : ["Chicken", "Spaghetti", "Wheels", "Brain", "Zombies", "Vampires", "Dungeons", "Dragons", "Wizards", "Knights"],
  badCharacters: ['Control', 'Meta', ' ', ';', "Alt", "Shift", "CapsLock", "Enter", "/", "\\", "[", "]", "(", ")"],
  totalGames : 0,
  triesLeft : 0,
  gamesWon : 0,
  gamesLost : 0,
  triedLetters: [],
  eventListener: document.body.addEventListener('keyup', function() {
    $("#lastLetter").html(event.key.toUpperCase());
    if (GameObject.badCharacters.includes(event.key)){/*If it DOES include something from badCharacters, do nothing*/}
      else{
      $("#triesLeft").html(() => GameObject.triesLeft--);
      $("#triedLetters").html(() => {GameObject.triedLetters.push(event.key.toUpperCase() + " ");return GameObject.triedLetters});
      function test(){
      };
      if(GameObject.triesLeft == 0) {
        GameObject.initializeGame();
        GameObject.totalGames++;
        $("#totalGames").html(GameObject.totalGames);
      };
    };
  }, false),

  initializeGame: function() {
    this.selector = Math.floor(Math.random()*GameObject.words.length);
    this.selectedWord = this.words[this.selector];
    $("#triedLetters").html(() => {this.triedLetters = []; return this.triedLetters;});
    $("#triesLeft").html(() => {this.triesLeft = this.selectedWord.length + (Math.floor(Math.random() * 5) + 1); return this.triesLeft});
    var hiddenWord = document.getElementById("hiddenWord");
    hiddenWord.innerHTML = "";
    for(i=0;i<this.words[this.selector].length;i++) {
      var x = document.createElement('span');
      var y = document.createTextNode("_ ");
      x.setAttribute("id",this.words[this.selector][i].toUpperCase());
      // x.setAttribute("class", "hiddenWordClass");
      x.appendChild(y);
      hiddenWord.appendChild(x);
    }
  }
}
//Use that selector # in the future to get the word from the wordlist, and tie it to those created divs.

GameObject.initializeGame()
