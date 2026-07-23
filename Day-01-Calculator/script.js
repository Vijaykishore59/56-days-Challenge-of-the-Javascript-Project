const display=document.getElementById("display");
const buttons=document.querySelectorAll("button");
buttons.forEach((buttons)=>{
    buttons.addEventListener("click",()=>{
        const value=buttons.innerText;
        if(value==="C"){
            display.value="";
        }
        else if(value==="="){
            try{
                let result=eval(display.value)
                if(result===Infinity){
                    display.value="Cannot Divided By Zero";
                }
                else{
                    display.value=result;
                }
            }
            catch{
                display.value="Error";
            }
        
        }
        else if(value=="⌫"){
            display.value=display.value.slice(0,-1);
        }
        else{
            display.value+=value;
        }
    })
})