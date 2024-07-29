let choices = document.querySelectorAll('.choice');
let result = document.querySelector('.result');
choices.forEach((choice) => {
    choice.addEventListener('click',()=>{
        let userChoice = choice.getAttribute('id');
        // console.log(userChoice);
        let options = ['rock','paper','scissor'];
        let random = Math.floor(Math.random()*3);
        let computerChoice = options[random];
        // console.log(computerChoice);
        playGame(userChoice,computerChoice);
    });
});

function playGame(userChoice,computerChoice){
    console.log("You: "+userChoice);
    console.log("Computer: "+computerChoice);
    if (userChoice === computerChoice) {
        // console.log("Draw");
        result.innerHTML = 'Draw';
    } else if (userChoice==='paper' && computerChoice==='rock'
        || userChoice==='scissor' && computerChoice==='paper'
        || userChoice==='rock' && computerChoice==='scissor'
    ) {
        // console.log('You Win!');
        result.innerHTML = 'You Win!';
    } else {
        // console.log('You Lose!');
        result.innerHTML = 'You Lose!';
    }
}