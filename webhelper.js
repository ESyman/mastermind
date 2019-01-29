var buttonElement = document.getElementById("submit-guess");

window.onload = start;

function start() {
    setup();
}

function setup() {
	code=setCode(colors);
	var welcome ="<h1>Welcome to Mastermind</h1>\n<p>Here are instructions.</p>"+code; //A heading is an automatically sized piece of text. <p></p> stands for paragraph. \n separates the lines and makes it more user-friendly in the code but doesn't change anything that's displayed on the page.
    var buttonElement = document.getElementById("submit-guess"); //sets the variable equal to the element from ID "submit-guess"
    buttonElement.innerHTML = "Submit color choices"; 
	var board = document.getElementById("board"); //sets the variable equal to the element from ID "board"
	board.innerHTML = welcome; //Sets the inner HTML of board to welcome.
    buttonElement.onclick = function () {
		var dropdown = document.getElementById("colors");
		console.log(dropdown.value);
		checkAnswers(dropdown.value);
		}
}

function story(text) {
    var boardElement = document.getElementById("board");
    boardElement.innerHTML = text;
}

function setOptions(options) {
    var dropdown = document.getElementById("colors");
    while (dropdown.options.length) {
        dropdown.remove(0);
    }
    for (var i = 0; i < options.length; i++) {
        var option = new Option(options[i], options[i]);
        dropdown.options.add(option);
    }
}

function delayText(text, delay) {
    var boardElement = document.getElementById("board");
    var index = 0;
    story("");
    var callback = function (text) {

        story(boardElement.innerHTML  + text[index]+ "<br />"+ "<br />");
        index += 1;
        if (index >text.length-1){
            clearInterval(timer);
        }
    }
    var timer = setInterval(function () {
        callback(text);
    }, delay);
}

