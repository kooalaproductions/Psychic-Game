// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
// var computerChoices = ["r", "p", "s"];

var left = 9;
var wins = 0;
var loses = 0;

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var uGuess = [];


function startUp() {
    var winUpdate = document.getElementById("winsText");
    winUpdate.innerHTML = ("Wins: " + wins);

    var losesUpdate = document.getElementById("losesText");
    losesUpdate.innerHTML = ("Loses: " + loses);

    var guessUpdate = document.getElementById("guessLeft");
    guessUpdate.innerHTML = ("Guesses Left: " + left);

    // var userGuess = document.getElementById("leftGuess");
    // userGuess.innerHTML = ("Your Gusses so far: " + uGuess.join(', '));


}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Make any character into lower case
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    //   console.log(userGuess);
    
    console.log("User answer: " + uGuess);

    //MIGHT WORK
    //   for(var i = 0; i<9; i++ ){
    //       uGuess[i]=userGuess;
    //       console.log("User Guess: " + uGuess[i])


    //   }

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("computer guess: " + computerGuess);

    
    var check = computerChoices.includes(userGuess);


    


    //this will run when user and computer match
    if(check === false){
        alert("That was not a valid guess, try again?");
        return false;
    }
    if (left !== 0 && check === true) {
        

        if (userGuess === computerGuess) {
            alert("This is a Win");
            wins = wins + 1;
            console.log(wins);

        } else {
            left = left - 1;

        }
        uGuess.push(userGuess);
        

        var winUpdate = document.getElementById("winsText");
        winUpdate.innerHTML = ("Wins: " + wins);

        var losesUpdate = document.getElementById("losesText");
        losesUpdate.innerHTML = ("Loses: " + loses);

        var guessUpdate = document.getElementById("guessLeft");
        guessUpdate.innerHTML = ("Guesses Left: " + left);

        var userGuess = document.getElementById("leftGuess");
        userGuess.innerHTML = ("Your Gusses so far: " + uGuess.join(', '));



    } 
    
    
    else { //if there are no more guesses reload the page

        alert("Game is over! Try Again!");
        location.reload();




    }
}