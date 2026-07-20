const guessInput=document.getElementById("guessInput");
const btn=document.getElementById("checkBtn");
const message=document.getElementById("message");
const attempts=document.getElementById("attempts");
const previousGuess=document.getElementById("previousGuesses");
let secretNumber=Math.floor(Math.random()*100)+1; //Math.random takes the decimal values between the 0 to 1
let attemptsLeft=10
let previous=[]
console.log(secretNumber);
function restartGame(){
    secretNumber=Math.floor(Math.random()*100)+1;
    attemptsLeft=10;
    previous=[]
    guessInput.value="";
    guessInput.focus();
    guessInput.disabled=false;
    attempts.innerText=attemptsLeft;
    previousGuess.innerText="";
    message.innerText="";
    btn.innerText="Check Guess";
    console.log(secretNumber);
}
btn.addEventListener("click", ()=>{
    if(btn.innerText==="Restart"){
        restartGame();
        return;
    }
    const guess=Number(guessInput.value);
    if(isNaN(guess) || guess<1 || guess>100){
        message.innerText="Enter the number between the 1 to 100";
        return;
    }
    previous.push(guess);
    previousGuess.innerText = previous.join(", ");
    console.log(guess);
    console.log(secretNumber);
    if(guess===secretNumber){
        message.innerText="🎉 Correct! You Won!";
        btn.innerText="Restart";
        guessInput.disabled=true;

    }
    else if(guess<secretNumber){
        message.innerText="Too low!";
        attemptsLeft--;
        attempts.innerText=attemptsLeft;
        }
    else{
        message.innerText="Too High!"
        attemptsLeft--;  
        attempts.innerText=attemptsLeft;
    }
    if(attemptsLeft===0){
        message.innerText=`😢 Game Over! The secret number was ${secretNumber}`;
        btn.innerText="Restart";
        guessInput.disabled=true;
        return;
    }
});