$(document).ready(function() {

var timer = 120;
var score = 0; //set the variables
var total = 11; // keep track of score, max is 11

//array for questions
var questions = ["#q1", "#q2", "#q3", "#q4", "#q5", "#q6", "#q7", "#q8", "#q9", "#q10", "#q11"];
// correct answers to questions
var answers = ["#q1b", "#q2a", "#q3a", "#q4d", "#q5d", "#q6d", "#q7b", "#q8d", "#q9d", "#q10c", "#q11b"];

// click on start buttton
$("#startButton").click(function(){
        $(this).hide();
        counter = setInterval(timer, 1000);
        displayForm();
});

// click on radio buttons - function checkAnswers will be called
$(":radio").on('click', checkAnswers);

// click on submit buttons
$("#submit").on("click", function(event) {
        event.preventDefault();
        alert("You got " + score + " out of " + total + " questions correct!");
   });

});

// **============= MAIN FUNCTIONS =============** //

function checkAnswers() {
  console.log(this);

  //create a for loop
  for (var i=0; i <= total; i++){
    //to determine if the index for the question matches the answer
    if (questions[i] === answers[i]) {
            score++;  // if correct add a point
          }
        }
  }
