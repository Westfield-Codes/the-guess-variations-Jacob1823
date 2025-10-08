// define function newGame
function newGame(){
  // create a Boolean variable for again, set to true
    let again = true;
  // run the guessGame function
    guessGame();
  // loop as long as again is true 
    while(again == true){
    // ask to play again with again set to a confirm
        
    // if again is true run the guessGame function

    // close the loop
    }
  // thank the player for playing

  // close the function
    }




// define function called guessGame
  function guessGame(){
  // generate a random integer 1-100
    let answer = Math.floor(Math.random()*100+1);
  // create guess and set equal to 0 
    let guess = 0
  // loop while guess is not equal to answer or to "q"
    while (guess != answer || guess != "q"){
    // set guess equal to asking user to "Guess a number, 1-100"
      guess = prompt("Guess a number, 1-100");
    // if guess equals "q" display "Quitter!"
      if (guess == q) alert("Quitter!");
    // or if guess equals answer display "Correct!" 
     else if (guess == answer) alert("Correct!");
    // or if guess is greater than answer display "Too high!" 
      else if (guess > answer) alert("Too high!");
    // or if guess is less than answer display "Too low!" 
      else if (guess < answer) alert("Too low!");
    // or say "Bad input"
      else alert("Bad input");
  // end the loop
    }
// end the function
  }