 let userScore = 0;
 let compScore = 0;
 let userScoreElem = document.querySelector("#user-score");
 let compScoreElem = document.querySelector("#comp-score");
 let compChoice = null;
 let msg = document.querySelector("#msg");
 let userChoiceElem = document.querySelector("#user-choice");
 let compChoiceElem = document.querySelector("#comp-choice");



 const getCompChoice = ()=>{
    const options = ["rock","paper","scissor"];
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
 }

 const drawGame = ()=>{
    msg.innerText = "Game was draw";
 }

 const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScoreElem.innerText = userScore;
        msg.innerText = "You Win !";
    }else{
        compScore++;
        compScoreElem.innerText = compScore;
        msg.innerText = "You lose ):";
    }
 } 


 let choices = document.querySelectorAll(".choice");
 
 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{

        let userChoice = choice.getAttribute("id");
        compChoice = getCompChoice();
        compChoiceElem.innerText = `computer chose ${compChoice}`;
        userChoiceElem.innerText = `You chose ${userChoice}`;

        playGame(userChoice);

    })
   
 })

 const playGame = (userChoice)=>{

    if(userChoice === compChoice){
        //Draw game
        drawGame();
     }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper , scissor
            if(compChoice === "paper"){
                userWin = false;
            }else{
                userWin = true;
            }
        }else if(userChoice === "paper"){
            //rock , scissors
            if(compChoice === "rock"){
                userWin = true;
            }else{
                userWin = false;
            }
        }else{
            //rock,paper
            if(compChoice ==="rock"){
                userWin = false;
            }else{
                userWin = true;
            }
        }
        showWinner(userWin);
     }

     
    
 } 


 
