const quote=document.getElementById("quote");
const author=document.getElementById("author");
const newQuote=document.getElementById("newQuote");
async function fetchQuote(){
    const response=await fetch("https://dummyjson.com/quotes/random");
    const data=await response.json();
    quote.textContent=`"${data.quote}"`;
    author.textContent=`-${data.author}`;
}
fetchQuote();
newQuote.addEventListener("click",function(){
    fetchQuote();

});
