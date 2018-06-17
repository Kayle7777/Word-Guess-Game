

GameObject = {
  words : ["Word","TestWord","MoreWords"],
  eventListener: document.body.addEventListener('keyup', () => $("#test").html(event.key), false)
}

function createUnderscores(divs) {
  selector = Math.floor(Math.random()*GameObject.words.length);
  var textNode= "";
  for(i=0;i<GameObject.words[selector].length;i++) {
    textNode += "_ ";
  }
  var underscoreHolder = document.getElementById("underscoreHolder");
    underscoreHolder.innerHTML = "";
    underscoreHolder.appendChild(document.createTextNode(textNode));
}

//notes to remember: put above function in object, and save "selector" number as a property on the object. Similar to past things with Python
//Use that selector # in the future to get the word from the wordlist, and tie it to those created divs.

createUnderscores(GameObject.words)
// need to have this delete the old one too CHECK got it
