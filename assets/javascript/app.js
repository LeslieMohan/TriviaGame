$(document).ready(function() {
  
  var score = 0; //set the variables
  var total = 11; // keep track of score, max is 11
  var position = 0; //position in the array of questions
  var radioBtns = $(":radio");

  
  
  


//start quiz       
  // click on start buttton
  //begin timer
  //show questions
  $("#startButton").click(function(){
          $(this).hide();
          
          /*counter = setInterval(timer, 1000);*/
          
  });
  
  
//answer to questions 

  

  // click on radio buttons - function checkAnswers will be called
  $(":radio").on('click', checkAnswers);
  if (q1 == null || q1 == "") {
          return false;
          alert("You forgot to answer this question...");
  }

       
//check answers
  //create a for loop to check answers
  function checkAnswers() {
    //array for questions
  var questions = ["#q1", "#q2", "#q3", "#q4", "#q5", "#q6", "#q7", "#q8", "#q9", "#q10", "#q11"];
  
  // correct answers to questions
  var correctAnswers = ["#q1b", "#q2a", "#q3a", "#q4d", "#q5d", "#q6d", "#q7b", "#q8d", "#q9d", "#q10c", "#q11b"];

          console.log("this is a score", score);

          for (var i=0; i <= questions.length; i++){
              //to determine if the index for the question matches the answer
              console.log(i);
              if (questions[i] === correctAnswers[i]) {
                console.log(questions[i], correctAnswers[i]);
                      score++;  // if correct add a point
                    }
                    else (false);
                  }
         
   };


//show results 
  // click on submit button to show results
  $("#submit").on("click", function(event) {
          event.preventDefault();
          alert("You got " + score + " out of " + total + " questions correct!");
  });

  
});

         








        














