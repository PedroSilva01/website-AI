var elementIndex3 = 0;
var txt3 = ['The CODECTY study group is dedicated to exploring the intricacies of artificial intelligence (AI) and its impact on society. Through rigorous research and analysis, we delve into the fundamentals of AI, providing a comprehensive understanding of how it operates and the implications it has on various industries. Our goal is to equip individuals with the knowledge and skills necessary to build and implement AI systems in situations where they are needed most.'];
var speed3 = 7.5;

function ContentTypeWriter() {
    var currentElement3 = document.querySelectorAll("#codecty-content")[elementIndex3];
    var currentTxt3 = txt3[elementIndex3];
    var i = 0;

    function ContentNextChar() {
        if (i < currentTxt3.length) {
            currentElement3.innerHTML += currentTxt3.charAt(i);
            i++;
            setTimeout(ContentNextChar, speed3);
        } else {
            elementIndex3++;
            if (elementIndex3 < txt3.length) {
                setTimeout(ContentTypeWriter, speed3);
            }
        }
    }

    ContentNextChar();
}

document.addEventListener('DOMContentLoaded', function() {
    ContentTypeWriter();
}, false);