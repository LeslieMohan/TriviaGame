$(document).ready(function() {

//seperate start page with submit button for starting the game which means: show questions and set timer to begin to count down
var timer = 120;

$("#startButton").click(function(){
        $(this).hide();
        counter = setInterval(timer, 1000);
        displayForm();
        });

 /*function startGame() {

 } */ 
 // select all radio buttons
var radioBtns = $(":radio");
// assign a function to the onclick event
radioBtns.on('click', getRadioButtonVal);
//display in console
function getRadioButtonVal() {
  console.log(this);
}     

function checkAnswers() {
//set the variables
var score = 0;
var total = 11;
// keep track of score, max is 11
       

//array for questions
var questions = ["#q1", "#q2", "#q3", "#q4", "#q5", "#q6", "#q7", "#q8", "#q9", "#q10", "#q11"];
// correct answers to questions
var answers = ["#q1b", "#q2a", "#q3a", "#q4d", "#q5d", "#q6d", "#q7b", "#q8d", "#q9d", "#q10c", "#q11b"];

//create a for loop  
for (var i=0; i <= total; i++){
        //to determine if the index for the question matches the answer
        if (questions[i] === answers[i]) {
                score++;  // if correct add a point
        
        }
}


//submit button
$("#submit").on("click", function(event) {
        event.preventDefault(); alert("You got " + score + " out of " + total + " questions correct!");
   });  
}

//display results
/*document.getElementById(".results").innerHTML = "You got" +score+ "out of" +total;

return false;*/








//question page



//set the timer to begin and display time counting down

//show question(s)

//when user submit answer, show result on new page

//if user does not answer, time will still run out and result page will still show

//*/
});
