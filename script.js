// typing effect on index.html //////////////////////////////////////////////////////////////////////
var i = 0;
var txt = 'Oh, hey!';
var speed = 100;
        
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typingHeader").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.onload = typeWriter ()



