const display=document.getElementById("display");
const button=document.querySelectorAll("button");
button.forEach((button)=>{
    button.addEventListener("click",()=>{
        const value=button.innerText;
        if(value==="C"){
            display.value="";
        }
        else if(value==="="){
            try{
                let result=eval(display.value);
                if(result==Infinity){
                    display.value="Cannot Divided By 0";
                }
                else{
                    display.value=result;
                }
            }
            catch{
                display.value="Error";
            }

        }
        else if(value==="⌫"){
            display.value=display.value.slice(0,-1);
        }
        else{
            display.value+=value;
        }
    })
})