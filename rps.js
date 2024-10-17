let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let parauser = document.querySelector("#user-score");
let paracomp = document.querySelector("#comp-score");



const genCompChoice = ()=>{
    const options = ["rock","paper","scissors"];
    let randidx = Math.floor(Math.random()*3);
    return options[randidx];
}


const gamedraw = ()=>{
    console.log("game was draw");
    msg.innerText = "game draw. play again";
    msg.style.backgroundColor="#081b31";

};

const playgame = (userchoice)=>{
    console.log("userChoice = ",userchoice);
 // generate computer choice
 let compchoice = genCompChoice();
 console.log("compchoice = ",compchoice);




const showWinner = (userwin,userChoice,compchoice)=>{
    if(userwin){
        userscore++;
        parauser.innerText= userscore;
        console.log("you win ");
        msg.innerText = `you win!. your ${userchoice} defeated ${compchoice}` ;
        msg.style.backgroundColor = "green"

    }
    else{
        paracomp.innerText= userscore;
        console.log("you lose");
        msg.innerText = `you lose!. ${compchoice}defeated your ${userchoice}`;
         msg.style.backgroundColor = "red";
    }
}

 if(userchoice===compchoice){
    //game draw
      gamedraw();
 }

 else{
    let userwin = true;
    if(userchoice === "rock"){
     userwin =  compchoice === "paper"? false: true;
    }
    else if(userchoice==="paper"){
        userwin = compchoice === "scissors"? false:true;
    }
    else{
        userwin = compchoice === "rock"? false:true;
    }

    showWinner(userwin,userchoice,compchoice);
 }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        console.log(userchoice);
        playgame(userchoice);
    })
});
