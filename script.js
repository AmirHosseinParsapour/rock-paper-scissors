function getRandom(min, max){
    return Math.floor((Math.random()*max)+min);
}
function computerPlay(){
    var choices = ["rock", "paper", "scissors"];
    var randomNom = getRandom(0,2);
    return choices[randomNom];
}
function playRound(playerChoice, computerChoice){
    let playerChoiceString = playerChoice.toLowerCase();
    let computerChoiceString = computerChoice.toLowerCase();
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
function play(count)
{
    var playerScore = 0;
    var computerScore = 0;
    for(var i = 0; i < count; i++){
        var playerChoice = prompt("rock|paper|scissors").toLowerCase().trim();
        var computerChoice = computerPlay();
        var resault = playRound(playerChoice, computerChoice);
        if(resault == "player"){
            playerScore++;
            alert(playerChoice + " beats " + computerChoice);
        }
        else if(resault == "computer"){
            computerScore++;
            alert(computerChoice + " beats " + playerChoice);
        }
        else{alert("draw")}
    }
    if(computerScore > playerScore)
    {
        alert("Sorry, You lost");
    }
    if(computerScore < playerScore)
    {
        alert("Yay, You won");
    }
    if(computerScore==playerScore){
        alert("How did you manage that??! DRAW!");
    }
    alert("Your Score: " + playerScore);
    alert("Computer Score: " + computerScore);
}