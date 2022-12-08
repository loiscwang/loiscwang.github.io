var i = 0;
var txt = 'Oh, hey there'; /* The text */
var speed = 40; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("index_item_one").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

console.log ()
