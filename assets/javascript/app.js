$(document).ready(function() {
  
  var score = 0; //set the variables
  var total = 11; // keep track of score, max is 11
  var position = 0; //position in the array of questions
  var radioBtns = $(":radio");
  var userInput =[]; 
  
  
  


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
  

  userInput.push(this.value);
  // correct answers to questions
}; 


//show results 
  // click on submit button to show results
  $("#submit").on("click", function(event) {
          event.preventDefault();

          var questions = ["#q1", "#q2", "#q3", "#q4", "#q5", "#q6", "#q7", "#q8", "#q9", "#q10", "#q11"];

          var correctAnswers = ["b", "a", "a", "d", "d", "d", "b", "d", "d", "c", "b"];

          console.log("this is a score", score);

          for (var i=0; i <= questions.length; i++){
              //to determine if the index for the question matches the answer
              console.log(i);
              if (userInput[i] === correctAnswers[i]) {
                console.log(userInput[i], correctAnswers[i]);
                      score++;  // if correct add a point
                    }
                    else (false);
                  }
         
  
          alert("You got " + score + " out of " + total + " questions correct!");
  });

  
});

         








        














