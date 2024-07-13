let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice");
 const msg= document.querySelector("#msg11");
 const userScorePara= document.querySelector("#user-score");
 const compScorePara= document.querySelector("#comp-score");


const getCompChoice=()=>{
   const options= ["rock", "paper", "scissors"];
   const randomIndex= Math.floor(Math.random()*3);
   return options[randomIndex];

}

const drawGame=()=>{
    console.log("The game was drawn");
    msg.innerText="Draw";
    msg.style.backgroundColor= "#081b31";


}

const showWinner=(userWin)=>{
    if(userWin){
        console.log("You Win!!");
        msg.innerText="You Win";
        msg.style.backgroundColor= "green";
        userScore++;
        userScorePara.innerText=userScore;
    }
    else{
        console.log("You lose");
        msg.innerText="You lose";
        msg.style.backgroundColor= "red";
        compScore++;
        compScorePara.innerText=compScore;


    }
}

const playGame=(userChoice)=>{
    console.log("user choice =", userChoice);
    const computerChoice= getCompChoice();
    console.log("computer choice =", computerChoice);

    if(userChoice===computerChoice){
        drawGame();
    }
    
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= computerChoice==="paper"?false:true;
            }
            else if(userChoice==="paper"){
                userWin= computerChoice==="scissors"?false:true;
            }
            else{
                userWin= computerChoice==="rock"?false:true;
            }
            showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
    const userChoice= choice.getAttribute("id");
    playGame(userChoice);
});

});