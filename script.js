// hm 2 variable ka use krenge 1. user ko track karne ke lie, 2. comp ko 

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


// Chote chote sabhi kaamo ko functions me divide kar rhe hai -> this is called modular way of programming 

// For Computer Choice 
const genComputerChoice = () => {

    let options = ["rock", "paper", "scissors"];
    // rock, paper, scissors

    // hmare computer ko inme se ek randomly generate karna hai 

    /* javascript ke ander aesa koi straight forward tareeka nhi hai bohot saari stings se random string generate karne ka, 
    lekin iske ander ek well known frequently used function hota hai which is called random function,
    hmare paas "Math" naam ki class hoti hai, jiske paas random naam ka method hota hai
    Math.random();
    ye 0 se 1 ke beech me koi bhi random value generate karta hai */

    // Ab agar hme 0 - 2 ki range me chaiye to Math.random() * 3;

    // Math.floor(); se decimal ke baad ki saari value hat jaegi 

    // so we can use it like Math.floor(Math.random() * 3);

    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


// For User Choice
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        // Ensure choice is correctly selected
        console.log("Clicked choice:", choice);

        const userChoice = choice.querySelector("img").getAttribute("id");
        
        playGame(userChoice);
    });
});



// For playing game
const playGame = (userChoice) => {
    console.log("User's choice:", userChoice);
    // generate computer choice 

    const compChoice = genComputerChoice();
    console.log("Comp Choice:", compChoice);

    if(userChoice === compChoice){
        // Draw
        drawGame();

    }
    else{
        let userWin = true;

        if(userChoice === "rock"){
            // In this computer choice might be either scissors or paper 

            userWin = compChoice === "scissors" ? true : false;
        }else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else if(userChoice === "scissors"){
            userWin = compChoice === "paper" ? true : false;
        }

        showWinner(userWin, compChoice, userChoice);
    }
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("You win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose!, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}