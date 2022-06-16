/*window.onload = game();*/

function playRound(player, computer) {
  player = player.toUpperCase();
  computer = computer.toUpperCase();
  if(player == "ROCK"){
    if(computer == "ROCK"){return 0}
    if(computer == "PAPER"){return -1}
    if(computer == "SCISSORS"){return 1}
  }else if(player == "PAPER"){
    if(computer == "ROCK"){return 1}
    if(computer == "PAPER"){return 0}
    if(computer == "SCISSORS"){return -1}
  }else if(player == "SCISSORS"){
    if(computer == "ROCK"){return -1}
    if(computer == "PAPER"){return 1}
    if(computer == "SCISSORS"){return 0}
  }else{
    console.log("Unknown Input");
    return -1
  }
}

function computerPlay(){
  let roll = Math.floor(Math.random()*3);
  if(roll == 0){ return "ROCK"; }
  else if(roll == 1){ return "PAPER"; }
  else{ return "SCISSORS"; }
}





function game(){
  let playerSelection = "ROCK";
  let wins = 0;
  let ties = 0;
  let losses = 0;

  for (let i = 0; i < 5; i++){
    // playerSelection = input
    playerSelection = window.prompt("ROCK / PAPER / SCISSORS?", playerSelection)
    // computerSelection = random
    let computerSelection = computerPlay();
    console.log(playerSelection + "vs" + computerSelection);
    result = playRound(playerSelection, computerSelection)
    if(result == 1){
      wins++;
      console.log("Win! Wins:" + wins + " Losses:" + losses +" Ties:" + ties);
    }else if(result == -1){
      losses++;
      console.log("Loss! Wins:" + wins + " Losses:" + losses +" Ties:" + ties);
    }else{
      ties++;
      console.log("Tie! Wins:" + wins + " Losses:" + losses +" Ties:" + ties);
    }
  }
}
