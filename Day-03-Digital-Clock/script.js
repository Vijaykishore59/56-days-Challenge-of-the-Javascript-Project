const time = document.getElementById("time-display");
const dateDisplay = document.getElementById("date-display");

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let year=now.getFullYear();
    let month=now.getMonth()+1;
    let date=now.getDate();
    if(date<10){
        date="0"+date
    }
    if(month<10){
        month="0"+month;
    }
    if(hours<10){
        hours="0"+hours
    }
    if(minutes<10){
        minutes="0"+minutes
    }
    if(seconds<10){
        seconds="0"+seconds
    }
    time.innerText=hours+":"+minutes+":"+seconds
    dateDisplay.innerText=date+"-"+month+"-"+year;
    
}
updateClock();
setInterval(updateClock, 1000);