const Base=document.querySelector("#bottom");
const height=document.querySelector("#high");
const AreaBtn=document.querySelector("#areaBtn");
const output=document.querySelector("#output");


AreaBtn.addEventListener('click',CalcArea);

function CalcArea(){
output.innerText= "Your Area is "+.5*Number(Base.value)*Number(height.value);
}