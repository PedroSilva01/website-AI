var elementIndex2 = 0;
var txt2 = ['CODECTY', 'ARTIFICIAL INTELIGENCE STUDY GROUP'];
var speed2 = 67.5;

function MaintypeWriter() {
    var currentElement2 = document.querySelectorAll("#codecty-main")[elementIndex2];
    var currentTxt2 = txt2[elementIndex2];
    var i = 0;

    function MaintypeNextChar() {
        if (i < currentTxt2.length) {
            currentElement2.innerHTML += currentTxt2.charAt(i);
            i++;
            setTimeout(MaintypeNextChar, speed2);
        } else {
            elementIndex2++;
            if (elementIndex2 < txt2.length) {
                setTimeout(MaintypeWriter, speed2);
            }
        }
    }

    MaintypeNextChar();
}

document.addEventListener('DOMContentLoaded', function() {
    MaintypeWriter();
}, false);