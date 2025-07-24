let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let choice , userChoice , randomChoice;
let btn = document.querySelector("#btn");
let you = document.querySelector("#you");
let comp = document.querySelector("#comp");
let youScore=0;
let compScore=0;
rock.onclick = ()=>{
    choice = rock;
    console.log(choice);
}
paper.onclick = ()=>{
    choice = paper;
    console.log(choice);
}
scissor.onclick = ()=>{
    choice = scissor;
    console.log(choice);
}
function generateChoice()
{
    randomChoice = Math.floor(Math.random() * 3);
}
btn.addEventListener("click",()=>{
    userChoice = choice;
    generateChoice();
    console.log(randomChoice);
    if(choice==="rock" )//0=rock 1=paper 2=scissor
    {
        if(randomChoice===2)
        {
        console.log("user wins");
        youScore++;
        }
        else if(randomChoice===0)
        {
        console.log("ties");
        }
        else
        {
        console.log("computer wins");
        compScore++;
        }
    }
    else if(choice==="paper")
    {
        if(randomChoice===0)
        {
        console.log("user wins");
        youScore++;
        }
        else if(randomChoice===1)
        console.log("ties")
        else
        {
        console.log("computer wins");
        compScore++;
        }
    }
    else
    {
        if(randomChoice===1)
        {
        console.log("user wins");
        youScore++;
        }
        else if(randomChoice===2)
        console.log("ties");
        else
        {
        console.log("computer wins");
        compScore++;
        }
    }
    you.textContent=`${youScore}`;
    comp.textContent=`${compScore}`;
})