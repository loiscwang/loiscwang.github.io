// typing effect on index.html //////////////////////////////////////////////////////////////////////
var i = 0;
var txt = 'Oh, hey there';
var speed = 75;
        
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typingHeader").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.onload = typeWriter ()

