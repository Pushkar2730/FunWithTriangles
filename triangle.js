const input=document.querySelectorAll(".angle");
const btnTriangle=document.querySelector("#triangle");
const output=document.querySelector("#output");
 
btnTriangle.addEventListener('click', function(){
output.innerText=IsTriangle();

})

function CalcSum(){
    let sum=0;
for(let i=0;i<3;i++){
sum+=Number(input[i].value);
}
return sum;
}

function IsTriangle(){
    if(CalcSum()=="180")
    {
        for(let i=0;i<3;i++){

            if(Number(input[i].value)>=30 && Number(input[i].value)<=120){
                
            }
            else{
                 return("its not a well conditioned triangle");
              }
       
    }
    return("Yes You are Right! It's a Triangle ");
    }

    else{
        return("its not a well conditioned triangle");
    }
    
}