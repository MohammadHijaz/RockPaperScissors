function play() {
    for (i=0; i<5; i++) {
let computerChoice = ['Rock','Paper','Scissors'][Math.floor(Math.random()* 3)];
computerChoice = computerChoice.toLowerCase();

let PlayerChoice = prompt("Choose between Rock,paper,scissors");
 PlayerChoice = PlayerChoice.toLowerCase();
        if (computerChoice==PlayerChoice) {
        console.log("Computer Chose " + computerChoice);
        console.log("You choose " + PlayerChoice)
        console.log("scisssors beat paper sorry you lost");
        }
    
    if (computerChoice=="scissors" && PlayerChoice=="paper") {
        console.log("Computer Chose " + computerChoice);
        console.log("You choose " + PlayerChoice)
        console.log("scisssors beat paper sorry you lost");
    }
    if (computerChoice=="scissors" && PlayerChoice=="rock") {
        console.log("Computer Chose " + computerChoice);
        console.log("You choose " + PlayerChoice)
        console.log("Rock beats scissors you Win!!");
    }
    if (computerChoice=="paper" && PlayerChoice=="scissors") {
        console.log("Computer Chose " + computerChoice);
        console.log("You choose " + PlayerChoice)
        console.log("You win scissors beat paper");
    } if (computerChoice=="paper" && PlayerChoice=="rock") {
        console.log("Computer Chose " + computerChoice);
        console.log("You choose " + PlayerChoice)
        console.log("paper beats Rock Computer Wins");
    } if (computerChoice=="rock" && PlayerChoice=="scissors") {
        console.log("Computer Chose " + computerChoice);
        console.log("You choose " + PlayerChoice)
        console.log("You lose rock breaks scissors");
    } if (computerChoice=="rock" && PlayerChoice=="paper") {
        console.log("Computer Chose " + computerChoice);
        console.log("You choose " + PlayerChoice)
        console.log("You win paper beats Rocks");
    }
    }
} 
    play();
