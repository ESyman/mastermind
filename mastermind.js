/* Mastermind I - no saved turns */

/* Initialization */
//colors, code, guess, feedback -- all arrays
var colors = ['r', 'c', 'w', 'g', 'b', 'y']; //has the most entries in an array
var code=[];
var guess=[];
var feedback=[]; //has the least amount of entries in an array; only black and white

/* Functions */
code=setCode(code,colors);
guess=getGuess(guess);
feedback=testGuess(guess,code,feedback);

/* Create the Secret Code */
// function pulls from six colors to randomly fill code with four values
function setCode(code,colors){
  for (i=0; i<4; i++){
  code[i]=colors[Math.floor(Math.random()*6)]; //math.random always genersates a number between .0001 and .9999
}
  console.log("code is "+(code));
  return code;
}

// function prompts player for each of four values and stores in array
function getGuess(code,colors){
  // guess a value for each position
	for (i=0;i<4;i++){
	guess[i]=prompt("What is your guess for the color in position "+(i+1)+"?");
	}
	console.log("guess is "+(guess));
	// return the code
	return guess;
}

/* Analyze the Guess */
// function analyzes guess against code and produces feedback
function testGuess(guess,code,feedback){
	// initialize the temporary code array (copy of code)
  var tempcode=code;
	// count the blacks and erase tempcode as you go - one loop - //the code for black pegs must go before white pegs; otherwise, the white pegs will take any same color that's not in the same positon!
  for (g=0;g<4;g++){
    if (guess[g]==tempcode[g]) {
      feedback[g]="b";
      tempcode[g]="";
    }
  }
	// count the whites and erase tempcode as you go - nested loops
  for (g=0;g<4;g++){ // sets up g, goes from G-C, g checks against c
    for (c=0;c<4;c++){ // sets up c, this means the code will now go from 0-0, 0-1, 0-2, 0-3, 1-0, etc... 
      if (guess[g]==tempcode[c]) {
        feedback[g]="w";
        tempcode[c]="";
  // use "continue" once a match is found in the inner loop
        continue;
    }
    }
	// console log the feedback
    console.log("test guess is "+guess);
    console.log("tempcode is "+tempcode);
    console.log("feedback is "+feedback); // feedback will be like "_,B,_,W" and should be rearranged to look like "B,W" in next function
  // send the feeback to the formatter
    feedback=formatFeedback(feedback);
    return feedback;
  }
}

/* Format the Feedback */
// function over-writes feedback to put b's first, w's second, delete the res
function rearrange(feedback) {
	// initialize the black and white count variables
	// write the black pegs
  var b = 0;
	// write the white pegs
  var w = 0;
	// count the blacks and whites
  for (i=0;i<4;i++){
		if (feedback[i]=="b") {
			b++;
		}
		else if (feedback[i]=="w") {
			w++;
		}
	}
  // initialize remainder as 4 - (B+W)
	var remainder = 4 - (b+w);
	// write the B's
	for (i=0;i<b;i++){
		feedback[i]="b";
	}
	// write the W's
	for (i=0;i<w;i++){
		feedback[i]="w";
	}
	// delete the blanks in the feedback remainder with array.pop
  for (i=0;i<remainder;i++){
		feedback.pop();
	}
  console.log("new feedback is "+feedback);
	// return the new feedback array
  return feedback;
}