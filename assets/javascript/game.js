

GameObject = {
  words : ["Word","TestWord","MoreWords"],
  eventListener: document.body.addEventListener('keyup', () => $("#test").html(event.key), false),
  createUnderscores: function(divs) {
    this.selector = Math.floor(Math.random()*GameObject.words.length);
    var underscoreHolder = document.getElementById("underscoreHolder");
    // Erase whatever is there already when this runs
    underscoreHolder.innerHTML = "";
    for(i=0;i<this.words[this.selector].length;i++) {
      var x = document.createElement('span');
      var y = document.createTextNode("_ ");
      x.setAttribute("id","Span"+i);
      x.appendChild(y);
      underscoreHolder.appendChild(x);
    }
      // underscoreHolder.appendChild(document.createTextNode(textNode));
  }
}
//Use that selector # in the future to get the word from the wordlist, and tie it to those created divs.

GameObject.createUnderscores(GameObject.words)
// need to have this delete the old one too CHECK got it
