// To do still -- Make it so when word is filled out completely, do initializeGame. This could be done maybe with something that checks
// for the amount of underscores present in $('#hiddenWord').children() array, or something.

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
      $("#triesLeft").html(() => {GameObject.triesLeft--;return GameObject.triesLeft});
      $("#triedLetters").html(() => {GameObject.triedLetters.push(event.key.toUpperCase() + " ");return GameObject.triedLetters});
      var kids = $("#hiddenWord").children();
      //ifIncrease is a very NOT elegant solution to triesLeft++ accidentally interating too many times on words with multiple of one letter.
      var ifIncrease=0;
      for(var i=0;i<GameObject.selectedWord.length;i++){
        if(event.key == kids[i].id){
          kids[i].innerHTML=event.key.toUpperCase();ifIncrease++
        }
      }
      if (kids.map((x) => kids[x].innerHTML).toArray().includes("_ ")) {}
      else{
        GameObject.initializeGame();
        $("#gamesWon").html(() => {GameObject.gamesWon++;return GameObject.gamesWon})
      };
      if(ifIncrease>0){
        $("#triesLeft").html(() => {GameObject.triesLeft++;return GameObject.triesLeft});
        ifIncrease=0;
      }
      if(GameObject.triesLeft == 0) {
        GameObject.initializeGame();
        $("#gamesLost").html(() => {GameObject.gamesLost++;return GameObject.gamesLost})
      };
    };
  }, false),

  initializeGame: function() {
    $("#totalGames").html(() => {GameObject.totalGames++;return GameObject.totalGames});
    this.selector = Math.floor(Math.random()*GameObject.words.length);
    this.selectedWord = this.words[this.selector];
    $("#triedLetters").html(() => {this.triedLetters = []; return this.triedLetters;});
    $("#triesLeft").html(() => {this.triesLeft = this.selectedWord.length + (Math.floor(Math.random() * 3)); return this.triesLeft});
    var hiddenWord = document.getElementById("hiddenWord");
    hiddenWord.innerHTML = "";
    for(i=0;i<this.words[this.selector].length;i++) {
      var x = document.createElement('span');
      var y = document.createTextNode("_ ");
      x.setAttribute("id",this.words[this.selector][i].toLowerCase());
      // x.setAttribute("class", "hiddenWordClass");
      x.appendChild(y);
      hiddenWord.appendChild(x);
    }
  }
}
//Use that selector # in the future to get the word from the wordlist, and tie it to those created divs.

GameObject.initializeGame()
