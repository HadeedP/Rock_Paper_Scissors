const fire = document.querySelector("#fire")
const water = document.querySelector("#water")
const air = document.querySelector("#air")
const earth = document.querySelector("#earth")
const userScore= document.getElementById("user-score")
const compScore= document.getElementById("computer-score")
const scoreBoard = document.querySelector(".score-board")

const choice=["fire", "water", "air", "earth"];
let playerSelection;
let computerSelection;
let playerscore= 0;
let computerscore= 0;

function main(){
  fire.addEventListener("click", function(){
    game("fire");
  })

  water.addEventListener("click", function(){
    game("water");
  })

  air.addEventListener("click", function(){
    game("air");
  })

  earth.addEventListener("click", function(){
    game("earth");
  })

}



function game(playerSelection){
  
  computerSelection= computerPlay().toLocaleLowerCase();


  if((playerSelection=="fire" && computerSelection=="earth") || (playerSelection=="earth" && computerSelection=="air") || (playerSelection=="air" && computerSelection=="water") || (playerSelection=="water" && computerSelection=="fire")){
      win(playerSelection,computerSelection);
  }else if((computerSelection=="fire" && playerSelection=="earth") || (computerSelection=="earth" && playerSelection=="air") || (computerSelection=="air" && playerSelection=="water") || (computerSelection=="water" && playerSelection=="fire")){
      lose(playerSelection,computerSelection);
  }else if(playerSelection==computerSelection){
      tie(playerSelection,computerSelection);
  }else if((playerSelection=="fire" && computerSelection=="air") || (playerSelection=="water" && computerSelection=="earth") ||(playerSelection=="air" && computerSelection=="fire") || (playerSelection=="earth" && computerSelection=="water") || (computerSelection=="fire" && playerSelection=="air") || (computerSelection=="water" && playerSelection=="earth") ||(computerSelection=="air" && playerSelection=="fire") || (computerSelection=="earth" && playerSelection=="water")){
      noconnection(playerSelection,computerSelection);
  }
  
}


function win(playerSelection,computerSelection){
  playerscore++;
  userScore.innerHTML=playerscore;
  alert("You used " + playerSelection+". The enemy used "+ computerSelection+". Congrats you won this round!");
  alert("You have " + playerscore+" points");
  alert("The enemy has " + computerscore + " points");

  if(playerscore==5){
    gameoverwin();
  }
  else if(computerscore==5){
    gameoverlose();
  }
  
}

function lose(playerSelection,computerSelection){
  computerscore++;
  compScore.innerHTML=computerscore;
  alert("The enemy used " + computerSelection+". You used "+ playerSelection+". Congrats you won this round!");
  alert("You have " + playerscore+" points");
  alert("The enemy has " + computerscore + " points");


  if(playerscore==5){
    gameoverwin();
  }
  else if(computerscore==5){
    gameoverlose();
  }
}

function gameoverwin(){
  alert("You won. You successfully helped the avatar!");
  alert("This page will now reset. Click ok to agree to the refresh");
  function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);",timeoutPeriod);
  }
  
  window.onload = timedRefresh(2000);
  
}

function gameoverlose(){
  alert("You lost. Try again and help the avatar save the world!");
  alert("This page will now reset. Click ok to agree to the refresh");
  function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);",timeoutPeriod);
  }
  
  window.onload = timedRefresh(2000);
  


}

function tie(playerSelection,computerSelection){
  alert("You both chose "+ playerSelection+ ", elements cancel eachother out");
}

function noconnection(playerSelection,computerSelection){
  alert("You used " + playerSelection+". The enemy used "+ computerSelection+". Both these elements cancel eachother out.");

}

main();
game(playerSelection,computerSelection);




  
 



function computerPlay(){
  let random = choice[Math.floor(Math.random() * choice.length)]
  return random;
  
}




