
//  WORKING CHANGES
//  Remove jQuery by adding it's relevant equivalents. Basically the .html() and the .children()
//  Move all the things that update the HTML DOM (basically most of the stuff that's jQuery) to an updateCounter() function,
// that runs each time the event listener finishes

document.body.addEventListener('keyup', function() {
  $("#lastLetter").text(event.key.toUpperCase());

  if (GameObject.badCharacters.includes(event.key)){/*If it DOES include something from badCharacters, do nothing*/}
  else{
    GameObject.triesLeft--;

    if (GameObject.triedLetters.includes(event.key.toUpperCase())) { /*I could actually make it so subsequent errors don't matter right here, by adding triesleft++*/
    }else {GameObject.triedLetters.push(event.key.toUpperCase())
    };

    var kids = $("#hiddenWord").children();

    //Check if you typed correct letter, only give one try back no matter how many letters uncovered
    var ifInc=0;
    for(var i=0;i<GameObject.selectedWord.length;i++){
      if(event.key == kids[i].id){
        kids[i].innerHTML=event.key.toUpperCase();ifInc++
      }
    };
    if(ifInc>0){
      GameObject.triesLeft++;
      ifInc=0;
    };

    // Game end conditions
    if (kids.map((x) => kids[x].innerHTML).toArray().includes("_")) {}
    else{
      GameObject.gamesWon++;
      GameObject.initializeGame();
    };

    if (GameObject.triesLeft == 0) {
      GameObject.initializeGame();
      GameObject.gamesLost++
    };

    GameObject.updateHTML();
  };
}, false)

// document.body.addEventListener('keyup', function() {
//   $("#lastLetter").text(event.key.toUpperCase());
//   if (GameObject.badCharacters.includes(event.key)){/*If it DOES include something from badCharacters, do nothing*/}
//   else{
//     $("#triesLeft").text(() => {GameObject.triesLeft--;return GameObject.triesLeft});
//     $("#triedLetters").html(() => {
//       var x = event.key.toUpperCase() + " ";
//       if (GameObject.triedLetters.includes(x)) {
//       }else {GameObject.triedLetters.push(x);return GameObject.triedLetters}
//     });
//
//     var kids = $("#hiddenWord").children();
//     var ifIncrease=0;
//
//     for(var i=0;i<GameObject.selectedWord.length;i++){
//       if(event.key == kids[i].id){
//         kids[i].innerHTML=event.key.toUpperCase();ifIncrease++
//       }
//     }
//     if (kids.map((x) => kids[x].innerHTML).toArray().includes("_")) {}
//     else{
//       GameObject.initializeGame();
//       $("#gamesWon").html(() => {GameObject.gamesWon++;return GameObject.gamesWon})
//     };
//
//     if(ifIncrease>0){
//       $("#triesLeft").html(() => {GameObject.triesLeft++;return GameObject.triesLeft});
//       ifIncrease=0;
//     }
//
//     if(GameObject.triesLeft == 0) {
//       GameObject.initializeGame();
//       $("#gamesLost").html(() => {GameObject.gamesLost++;return GameObject.gamesLost})
//     };
//   };
// }, false)

GameObject = {
  words : {
    //Gonna set up hints
    "Chicken": "Test",
    "Spaghetti": "Test2",
    "Wheels": "Test3",
    "Brain":"Test4",
    "Zombies":"Test5",
    "Vampires":"Test6",
    "Dungeons":"Test7",
    "Dragons":"Test8",
    "Wizards":"Test9",
    "Knights":"Test10"
  },
  badCharacters: ['Control', 'Meta', ' ', ';', "Alt", "Shift", "CapsLock", "Enter", "/", "\\", "[", "]", "(", ")", "Backspace", "=", "-", "'", "\""],
  totalGames : 0,
  triesLeft : 0,
  gamesWon : 0,
  gamesLost : 0,
  triedLetters: [],

  updateHTML: function() {
    // NOTE: triesLeft updateHTML
    document.getElementById("triesLeft").innerHTML = this.triesLeft;
    // NOTE: triedLetters updateHTML
    document.getElementById("triedLetters").innerHTML = this.triedLetters.join(" ");
    // NOTE: totalGames updateHTML
    document.getElementById("totalGames").innerHTML = this.totalGames;
    // NOTE: gamesWon updateHTML
    document.getElementById("gamesWon").innerHTML = this.totalGames;
    // NOTE: gamesLost updateHTML
    document.getElementById("gamesLost").innerHTML = this.gamesLost;
  },

  initializeGame: function() {
    $("#totalGames").html(() => {GameObject.totalGames++;return GameObject.totalGames});
    this.selectedWord = Object.keys(this.words)[Math.floor(Math.random() * Object.keys(this.words).length)]
    $("#triedLetters").html(() => {this.triedLetters = []; return this.triedLetters;});
    $("#triesLeft").html(() => {this.triesLeft = this.selectedWord.length + (Math.floor(Math.random() * 3)); return this.triesLeft});
    var hiddenWord = document.getElementById("hiddenWord");
    hiddenWord.innerHTML = "";

    for(i=0;i<this.selectedWord.length;i++) {
      var x = document.createElement('span');
      var y = document.createTextNode("_");
      x.setAttribute("id",this.selectedWord[i].toLowerCase());
      // x.setAttribute("class", "hiddenWordClass");
      x.appendChild(y);
      hiddenWord.appendChild(x);
    }
  }
}

GameObject.initializeGame()
