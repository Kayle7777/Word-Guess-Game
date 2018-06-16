

GameObject = {
  words : ["Word","TestWord","MoreWords"],
  eventListener: document.body.addEventListener('keyup', () => $("#test").html(event.key), false)
}

function omg(divs) {
  selector = Math.floor(Math.random()*GameObject.words.length);
  for(i=0;i<GameObject.words[selector].length;i++) {
    $(document.body).append("_ ");
  }
}

//notes to remember: put above function in object, and save "selector" number as a property on the object. Similar to past things with Python
//Use that selector # in the future to get the word from the wordlist, and tie it to those created divs.

omg(GameObject.words)
