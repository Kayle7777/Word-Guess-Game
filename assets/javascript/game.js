Game = {
  key : null,
  eventListener: window.addEventListener('load', function() {
    if (document.body) {
      document.body.addEventListener('keyup', function(event) {
        this.key = event.key;
        console.log(this.key);
      })
    }
  }),
  words : ["Word","TestWord","MoreWords"]
}
