let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");


const genCompChoice=()=>{
    const options=["rock","paper","scissore"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="game was draw,try again";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin)=>{
    if(userWin){
        console.log("you win");
        msg.innerText="you win";
        msg.style.backgroundColor="green";
    }else{
        console.log("you lose");
        msg.innerText="you lose";
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
   console.log("user choice=",userChoice);
   const compChoice=genCompChoice();
   console.log("comp.choice=",compChoice);



if(userChoice==compChoice){
    drawGame();
}else{
    let userWin=true;
    if(userChoice=="rock"){
        userWin=compChoice==="paper" ? false : true;

    }else if(userChoice==="paper"){
        userWin=compChoice==="scissors" ? false : true;

    }else{
        compChoice==="rock" ? false : true;
    }
    showWinner(userWin);
}
};

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       // console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
});