var elementIndex = 0;
var txt = ['HOME', 'ABOUT', 'PORTFOLIO', 'SUBJECTS'];
var speed = 75;

function typeWriter() {
    var currentElement = document.querySelectorAll("#codecty-menu")[elementIndex];
    var currentTxt = txt[elementIndex];
    var i = 0;

    function typeNextChar() {
        if (i < currentTxt.length) {
            currentElement.innerHTML += currentTxt.charAt(i);
            i++;
            setTimeout(typeNextChar, speed);
        } else {
            elementIndex++;
            if (elementIndex < txt.length) {
                setTimeout(typeWriter, speed);
            }
        }
    }

    typeNextChar();
}

document.addEventListener('DOMContentLoaded', function() {
    typeWriter();
}, false);