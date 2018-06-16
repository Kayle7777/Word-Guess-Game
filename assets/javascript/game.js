

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

omg(GameObject.words)
