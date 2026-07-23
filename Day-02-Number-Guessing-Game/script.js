const guessInput=document.getElementById("guessInput");
const btn=document.getElementById("checkBtn");
const message=document.getElementById("message");
const attempts=document.getElementById("attempts");
const previousGuess=document.getElementById("previousGuesses");
let secretNumber=Math.floor(Math.random()*100)+1;
let attemptsLeft=10;
let previous=[];
function restartGame(){
    secretNumber=Math.floor(Math.random()*100)+1;
    attemptsLeft=10;
    previous=[];
    guessInput.value="";
    guessInput.focus()
    guessInput.disabled=false;
    btn.innerText="Check Guess";
    message.innerText="";
    attempts.innerText=attemptsLeft;
    previousGuess.innerText="";
}
btn.addEventListener("click",()=>{
    if(btn.innerText=="Restart"){
        restartGame();
        return;
    }
    console.log(secretNumber);
    const guess=Number(guessInput.value);
    if(isNaN(guess) || guess<1 || guess>100){
        message.innerText="The number between 1 and 100";
        return;
    }
    previous.push(guess);
    previousGuess.innerText=previous.join(",")
    if(guess===secretNumber){
        message.innerText="🎉 Correct! You Won!";
        btn.innerText="Restart";
        guessInput.disabled=true;
    }
    else if(guess<secretNumber){
        message.innerText="Too Low!";
        attemptsLeft--;
        attempts.innerText=attemptsLeft;
    }
    else if(guess>secretNumber){
        message.innerText="Too High!";
        attemptsLeft--;
        attempts.innerText=attemptsLeft;
    }
    if(attemptsLeft==0){
        message.innerText="😢 Game Over! The secret number was ${secretNumber}";
        btn.innerText="Restart";
        guessInput.disabled=true;
    }
})