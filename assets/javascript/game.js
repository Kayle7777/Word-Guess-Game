//The window.onload bit must be used because Javascript can't use the document.body, because when the script loads, body hasn't been created yet.
window.onload = function() {
//This if statement is probably too redundant, but it will check if document.body isn't null (I.E. is it true?)
  if (document.body) {
  document.body.addEventListener('keyup', function(event) {
    console.log(event.key);
    });
  }
}
