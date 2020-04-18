function getRandom(min, max){
    return Math.floor((Math.random()*max)+min);
}
function computerPlay(){
    var choices = ["rock", "paper", "scissors"];
    var randomNom = getRandom(0,3);
    console.log(randomNom);
    return choices[randomNom];
}
function playRound(playerChoice, computerChoice){
    let playerChoiceString = playerChoice.toLowerCase();
    let computerChoiceString = computerChoice.toLowerCase();
    console.log(playerChoiceString);
    console.log(computerChoiceString);
    if(playerChoiceString==computerChoiceString) return "draw";
    if(playerChoiceString == "rock")
    {
        if(computerChoiceString == "paper")
        {
            return "computer";
        }
        return "player";
    }
    if(playerChoiceString == "scissors")
    {
        if(computerChoiceString=="rock")
        {
            return "computer";
        }
        return "player";
    }
    if(computerChoiceString == "scissors")
    {
        return "computer";
    }
    return "player";
}

var buttons = document.querySelectorAll('.button');
buttons.forEach(key=>key.addEventListener('click', clicked));


function clicked(e){
  const computerChoice = computerPlay();
  const winner = playRound(e.target.dataset['choice'], computerChoice);
  const lbl = document.querySelector(`span[data-id=${winner}]`);
  const meme = document.querySelector('.label');
  if(!lbl){//draw
    meme.innerText = 'DRAW!';
    meme.classList.add('showing');
    return;
    //stop function from running all toghether
  }
  let score = lbl.innerText;
  let newScore = +score + 1;
  lbl.innerText = newScore;
  if(winner == "player"){
    meme.innerText = `${e.target.dataset['choice']} beats ${computerChoice}`;
  }
  else{
    meme.innerText = `${computerChoice} beats ${e.target.dataset['choice']}`;
  }
  meme.classList.add('showing');
}

function dontShow(e){
  this.classList.remove('showing');
}

const meme = document.querySelector('.label');
meme.addEventListener('transitionend', dontShow);
