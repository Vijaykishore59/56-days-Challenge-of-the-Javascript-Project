const guessInput=document.getElementById("guessInput");
const btn=document.getElementById("checkBtn");
const message=document.getElementById("message");
const attempts=document.getElementById("attempts");
const previousGuess=document.getElementById("previousGuesses");
const secretNumber=Math.floor(Math.random()*100)+1; //Math.random takes the decimal values between the 0 to 1
let attemptsLeft=10
console.log(secretNumber);
btn.addEventListener("click", ()=>{
    const guess=Number(guessInput.value);
    console.log(guess);
    console.log(secretNumber);
    if(guess===secretNumber){
        message.innerText="Correct";

    }
    else if(guess<secretNumber){
        message.innerText="Too low!";
        attemptsLeft--;  
        attempts.innerText = attemptsLeft;
    }
    else{
        message.innerText="Too High!"
        attemptsLeft--;  
        attempts.innerText=attemptsLeft;
        

    }
});