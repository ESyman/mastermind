 /* Mastermind I - no saved turns */

/* Initialization */
//colors, code, guess, feedback (arrays) and turn (0);
var colors = ["r","b","g","w","c","y"]; //Red, Blue, Green, White, Cyan, Yellow
//guess = aray, code = array; b, w = variable integers -> feedback = array; BB WW
var code = [];
var guess = [], feedback = [];
var turns=0;
// add arrays for thisTurn, turnRecords
var thisTurn = [], turnRecords = [];

//alert("Hello world"); // says that if code works
/* Main Function */
// define Main function
	// call setCode function
	// start while loop - run while fourth feedback not = "b" and first guess not = "q"
		// increment turn
		// set guess = getGuess
		// set feedback = testGuess(guess)
		// alert turn and feedback
	// }
	// alert "You're winner" if while loop ended with first condition
	// alert "You quit" if while loop ended with section condition
//}

/* Functions */

function main(){
	//alert("Hello world - function main"); // says that if main function works
	code=setCode(colors);
	alert("Colors include Red, Cyan, Yellow, White, Black, and Green.");
	while (feedback[3]!="b" && guess[0]!="q") {
		turns++;
		guess=getGuess();
		feedback=testGuess(code,guess); // calls formatFeedback
		//thisTurn=addTurn(guess,feedback);
		turnRecords.push(addTurn(guess,feedback));
		//push thisTurn to turnRecords
		//alert("Guess "+turns+" : "+guess+" returns: "+feedback);
		alert("Turn and feedback for turn "+turns+": "+turnRecords); //should be more userfriendly, like "Guess "+turns+": guess 0, 1, 2, 3 | feedback 0, 1, 2, 3 /n"
		//turnRecords[turns-1];
	}
	if (feedback[3]=="b") alert("You're winner!");
	else if (guess[0]=="q") alert("You quit!");
	else alert("You won! Maybe.");
}

/* Create the Secret Code */
// define function setCode to pull from six colors to randomly fill code with four values 0-5
function setCode(colors){
	for(var i=0; i<4; i++){
		code[i]=colors[Math.floor(Math.random()*6)]; // math.random generates a number between .0001 and .9999
	}
	console.log("code is "+code);
	return code;
}

/* Get a Player's Guess */
// define function getGuess to prompt player for each of four values and stores in guess array
function getGuess(){
	for (var i=0;i<4; i++){
		guess[i] = prompt("What is your guess for the color in position "+(i+1)+"?");
	}
	console.log("guess is "+guess);
	return guess;
}

/* Analyze the Guess */
// define function testGuess to analyze guess against code and produces feedback
function testGuess(code,guess){
  // initialize the temporary code and guess arrays as copies
	var b=0, w=0;
	var tempCode = code.slice(0);
	var tempGuess = code.slice(0);
  // count the blacks and erase tempcode and tempguess as you go - one loop - the blacks need to be done first, or else, the code will take any color that's not in the same position!
	for (var g=0; g<4; g++){
	  if (tempGuess[g] == tempCode[g]){
		  b++;
		  tempGuess[g]="";
		  tempCode[g]="";
		  }
	  }
	// count the whites and erase tempcode and tempguess as you go - nested loops
	for (var g=0; g<4; g++){
        // use "continue" once a match is found in the inner loop
		for (var c=0; c<4;c++ && tempGuess!=""){
			if (tempGuess[g]==tempCode[c] && tempGuess[g]!=""){
				w++;
				tempGuess[g]="";
				tempCode[c]="";
				continue;
			}
		return;
		}
	// console log the blacks feedback
	console.log("blacks is "+b+" and whites is "+w);
	// return the feedback
	formatFeedback(b,w);
	return feedback;
	}
}


/* Format the Feedback */ /*Create our Feedback*/
// define function formatFeedback to rewrite the feedback array: put b's first, w's second, delete the rest
function formatFeedback(b,w){
	feedback=[];
	// initialize the black and white count variables // clear out feedback
	// count the blacks and whites in a loop
	for (var i=0;i<b;i++){
		feedback[i]="b";
	}
	for (var i=b;i<(b+w);i++){
		feedback[i]="w";
	}
	// define remainder as 4 - (b + w)
	//var remainder = 4-(b+w);
	// write the black pegs first
	// write the white pegs second
	// console log the feedback
	console.log("feedback is equal to "+feedback);
	// return the new feedback array
	return feedback;
}

/* Define function addTurn to make an array thisTurn from Guess and Feedback */
/* goal: (guess+feedback = array thisTurn;) r + feedback.length = # things to store; 4 = turn values, guess.length; for i=1 to TV; if i < 4 { this turn [i] = guess[i]}; if i > 3; firstTurn[i]=feedback[i-4]*/
function addTurn(guess,feedback){
	// initialize thisTurn;
	var thisTurn=[];
	// set turnValues = 4 + length of feedback
	var turnValues=4+feedback.length;
	// write turnvalues into thisTurn
	for (var i=0;i<turnValues;i++) {
		// if index 0 - 3, write guess sub index
		if (i < 4) {
			thisTurn[i]=guess[i];
		}
		// if index > 3, write feedback sub index-4 to correct for position
		if (i > 3) {
			thisTurn[i]=feedback[i-4];
		}
	}
	// console log thisTurn - comment out all other consle logs
	console.log("thisTurn is "+thisTurn);
	// return thisTurn
	return thisTurn;
}
/* Function to format turnRecords */
/*var text1 = "Hello ";
var text2 = "world";
var text3 = text1.concat(" ", text2);*/
function formatTurnRecords(turnRecords){
	var alertString ="";
	var thisGuess ="";
	var thisFeedback="";
	for (var row=0;row<turns;row++){
		alertString = alertString.concat("Turn "+row+": "); //alert("Problem?\n New line?"); //turnString = turnRecords.split(" ");
		//thisGuess=turnRecords[0][0].toString(); //first row, first item; the first thing that's in turnRecords.
		thisGuess=turnRecords[0].slice(0, 4).join(" ");//.toString();
		//alert("this guess ="+thisGuess);
		alertString = alertString.concat(thisGuess);//alertString.concat("Turn "+row+": ");
	}
}

/*function formatTurnRecords(turnRecords){
	var alertString = "";
	var thisGuess = "";
	var thisFeedback = "";
	for (var row=0;row<turn;row++) {
		alertString = alertString.concat("Guess "+row+" : ");
		thisGuess=turnRecords[row].slice(0, 4).join(""); //Slices row from 0 and ends at 4 (slices 0 to 3), sets thisGuess (the guess you've made and it shows to you) to that
		alertString = alertString.concat(thisGuess);
		alertString = alertString.concat(" || ");
		thisFeedback=turnRecords[row].slice(4, turnRecords[row].length).join(); //slice starts at 4, goes to the length of turnRecords, joining it to thisFeedback
		alertString = alertString.concat(thisFeedback);
		alertString = alertString.concat("\n");
		alert(alertString); // testing purposes
	}
}*/
