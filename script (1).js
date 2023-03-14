let [round, comp_score, user_score] = [0,0,0]; // variables

let gameRules = { //sets up the win-lose-draw scenarios for the case function
    Rock: {
        Rock: 'draw',
        Scissors: 'lose',
        Paper: 'win',
        Spock: 'win',
        Lizard: 'lose'
    },
    Paper: {
        Paper: 'draw',
        Rock: 'lose',
        Scissors: 'win',
        Lizard: 'win',
        Spock: 'lose'
    },
    Scissors: {
        Scissors: 'draw',
        Paper: 'lose',
        Rock: 'win',
        Lizard: 'lose',
        Spock: 'win'
    },
    Lizard: {
        Scissors: 'win',
        Paper: 'lose',
        Rock: 'win',
        Lizard: 'draw',
        Spock: 'lose'
    },
    Spock: {
        Scissors: 'lose',
        Paper: 'win',
        Rock: 'lose',
        Lizard: 'win',
        Spock: 'draw'
    }
}
function rock() { //custom function used as parameter for clicked function
  var input;
  input = 'Rock';
  return input;
}
function paper() { //custom function used as parameter for clicked function
  var input;
  input = 'Paper';
  return input;
}
function scissors() { //custom function used as parameter for clicked function
  var input;
  input = 'Scissors';
  return input;
}
function lizard() { ///custom function used as parameter for clicked function
  var input;
  input = 'Lizard';
  return input;
}
function spock() { //custom function used as parameter for clicked function 
  var input;
  input = 'Spock';
  return input;
}
function reset() { //custom function used as parameter for clicked function 
  location.reload();
}
function clicked(input) { //custom function used as parameter for clicked function 
    console.log(user_score)
    let choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    let randomNumber = Math.trunc(Math.random() * 5); //trunc removes the fraction part of any number and gives the int value
    let comp_choice = choices[randomNumber];
    console.log(randomNumber);
    document.getElementById("computerchoice").innerHTML = `Computer chose <span>${comp_choice.toUpperCase()}</span>`;   //innerHtml is use when we use to replace any tag etc. but innertext is used to update or change the content of the tag.
    document.getElementById("userchoice").innerHTML = `You chose <span>${input.toUpperCase()}</span>`;
    round = round + 1
    document.getElementById("round").innerHTML = round;
    switch(gameRules[comp_choice][input]) { 
        case 'win': //user win scenario
            user_score = user_score + 1;
            document.getElementById('winner').innerHTML = "You win!"
            break;
        case 'lose': //user lose scenario
            comp_score = comp_score + 1;
            document.getElementById('winner').innerHTML = 'You lost!'
            break;
        case 'draw': //user draw scenario
            document.getElementById('winner').innerHTML = 'You tied!'
            break; 
    }
    document.getElementById('user_score').innerHTML = user_score;
    document.getElementById('comp_score').innerHTML = comp_score; 

// For user wins and computer wins
    if(user_score === 10) {
        alert("You won the match");
        location.reload(); //resets score after 10 points
       
    }
    else if(comp_score === 10) {
        alert("Computer won the match");
        location.reload();
    }  
}



















