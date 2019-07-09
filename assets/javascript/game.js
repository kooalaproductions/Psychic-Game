//Psychic Game Function

var left = 9;//how many chances are left
var wins = 0;//keep score of wins
var loses = 0;//keep score of losses
//array of alphabet
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"];
//array for user choices
var uGuess = [];


function startUp() {
    var winUpdate = document.getElementById("winsText");
    winUpdate.innerHTML = ("Wins: " + wins);

    var losesUpdate = document.getElementById("losesText");
    losesUpdate.innerHTML = ("Loses: " + loses);

    var guessUpdate = document.getElementById("guessLeft");
    guessUpdate.innerHTML = ("Guesses Left: " + left);

    var userGuess = document.getElementById("leftGuess");
    //joins the elements together
    userGuess.innerHTML = ("Your Gusses so far: " + uGuess.join(', '));


}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    
    // Make any character into lower case
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    //   console.log(userGuess);

    console.log("User answer: " + userGuess);


    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("computer guess: " + computerGuess);

    //checks array to see if any of the keys match with the array and if so return true
    var check = computerChoices.includes(userGuess);
    //pushes elements to uGuess array
    uGuess.push(userGuess);

    //this will run when user and computer match
    if (check === false) {
        alert("That was not a valid guess, try again?");
        return false;
    }
    //run if conditions are true
    if (left !== 0 && check === true) {


        if (userGuess === computerGuess) {
            alert("This is a Win");
            wins = wins + 1;
            left = 10;//it displays 1 less than the number assigned 
            uGuess = [];
            // reset();
            console.log(wins);
            if(uGuess.length !== 0){
                uGuess = [];
            }

        }
        //run if does not match computer choice
        if (userGuess !== computerChoices) {
            left--;
            //will run once there are not more tries left
            if (left === 0) {
                alert("HAHA YOU LOST! Try again loser!! :P");
                loses = loses + 1;
                left = 9;
                uGuess = [];

                if(uGuess.length !== 0){
                    uGuess = [];
                }
   
            }


        }
        
       //updates the HTML 
        var winUpdate = document.getElementById("winsText");
        winUpdate.innerHTML = ("Wins: " + wins);

        var losesUpdate = document.getElementById("losesText");
        losesUpdate.innerHTML = ("Loses: " + loses);

        var guessUpdate = document.getElementById("guessLeft");
        guessUpdate.innerHTML = ("Guesses Left: " + left);

        var userGuess = document.getElementById("leftGuess");
        //joins the elements together 
        userGuess.innerHTML = ("Your Gusses so far: " + uGuess.join(', '));
    }
}