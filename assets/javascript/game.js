let key;

window.onload = function() {
  if (document.body) {
    document.body.addEventListener('keyup', function(event) {
      key = event.key
    });
  }
}

Game = {
  keywatch : Game.watch(this.key, function(id, oldval, newval) {
    console.log('key.' + id + ' changed from' + oldval + " to " + newval);
    return newval;
  })
  this.key = key
}
