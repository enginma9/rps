
let i = 0;
let text = 'Hands of Destiny';
let title = "";
let me_wins = 5;
let computer_wins = 5;
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const ONE = 'I';
const TWO = 'II';
const THREE = 'III';
const FOUR = 'IV';
const FIVE = 'V';
const COMPUTER = -1;
const TIE = 0;
const ME = 1

function translateWins(wins){
  if(wins == 0){
    return "";
  }else if(wins == 1){
    return ONE;
  }else if(wins == 2){
    return TWO;
  }else if(wins == 3){
    return THREE;
  }else if(wins == 4){
    return FOUR;
  }else if(wins == 5){
    return FIVE;
  }else{
    console.log('This is embarassing.')
    return "";
  }

}

function playRound(player, computer){
  if(player == ROCK){
    if(computer == ROCK){return TIE};
    if(computer == PAPER){return COMPUTER};
    if(computer == SCISSORS){return ME};
  }else if(player == PAPER){
    if(computer == ROCK){return ME};
    if(computer == PAPER){return TIE};
    if(computer == SCISSORS){return COMPUTER};
  }else if(player == SCISSORS){
    if(computer == ROCK){return COMPUTER};
    if(computer == PAPER){return ME};
    if(computer == SCISSORS){return TIE};
  };
};

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('bounce');
}

function removeBodyTransition(){
  body.className = "";
}

/* addBodyTransition('redslash') */
function addBodyTransition(classText){
  body.classList.add(classText)
  setTimeout(removeBodyTransition, 500)
}

function type() {
  if ( i < text.length ) {
    title = title.concat(text[i]);
    document.getElementById("title").innerText = title;
    i++;
    setTimeout(type, 75);
  }
}

function computerPlay(){
  return Math.floor(Math.random()*3);
}

function lose(){
  // update center text, set background with 'loss', add transition with 'bounce' to 'computer'
  document.getElementById('computer').classList.add('bounce');
  document.getElementById("status_1").innerText = "Nice";
  document.getElementById("status_2").innerText = "Try!";
  computer_wins++;
  document.getElementById("computer_wins").innerText = translateWins(computer_wins);
}

function win(){
  // update center text, set background with 'won', add transition with 'bounce' to 'me'
  document.getElementById('me').classList.add('bounce');
  document.getElementById("status_1").innerText = "Good";
  document.getElementById("status_2").innerText = "Job!";
  me_wins++;
  document.getElementById("me_wins").innerText = translateWins(me_wins);
}

function tie(){
  // do nothing, but update center text.
  document.getElementById("status_1").innerText = "Try";
  document.getElementById("status_2").innerText = "Again!";
}

function play(){
  id = this.id
  console.log(id)
  if(id == 'reset_button'){
    reset();
    return;
  }
  if( me_wins == 5|| computer_wins == 5){return;};

  let selection = 0;
  if( id == 'button1' ){
    selection = ROCK;
  }else if( id == 'button2' ){
    selection = PAPER;
  }else if( id == 'button3' ){
    selection = SCISSORS;
  }
  let winner = playRound(selection, computerPlay() );
  if( winner == -1 ){
    lose();
  }else if( winner == 0 ){
    tie();
  }else if ( winner == 1){
    win();
  }
  if( me_wins == 5|| computer_wins == 5){
    show_reset_button();
  }
}

function show_reset_button(){
  document.getElementById("reset_button").style.display = 'block';
  // set border of buttons to a solid color, to make it look like they aren't clicked (.off)
  document.getElementById("button1").classList.add('off');
  document.getElementById("button2").classList.add('off');
  document.getElementById("button3").classList.add('off');
}

function reset(){
  me_wins = 0;
  computer_wins = 0;
  // hide reset button
  document.getElementById("reset_button").style.display = 'none';
  // remove border styling (remove the ".off")
  document.getElementById("button1").classList.remove('off');
  document.getElementById("button2").classList.remove('off');
  document.getElementById("button3").classList.remove('off');

}

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener( 'click', play ));

const results = Array.from(document.querySelectorAll('.results'));
results.forEach(result => result.addEventListener('transitionend', removeTransition));

window.onload = type();



// Works, but not for gradients, images may work, but going a different direction rn.
// var body = document.body;
// body.addEventListener('transitionend', removeBodyTransition);

/*
const holders = Array.from(document.querySelectorAll('.holder'));
holders.forEach(holder => holder.addEventListener('transitionend', removeTransition));

document.getElementById("button1").addEventListener("click", displayDate);
^^ could address each button individually, or pass the button clicked to the function, and have it sort it out.  (This seems to be what the assignment wants.)
const buttons = Array.from(document.querySelectorAll('button'));
*/















/*
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
*/
