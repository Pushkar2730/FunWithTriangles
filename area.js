const Base=document.querySelector("#base");
const height=document.querySelector("#height");
const AreaBtn=document.querySelector("#areaBtn");
const output=document.querySelector("#output");


AreaBtn.addEventListener('click',CalcArea);

function CalcArea(){
output.innerText= "Your Area is "+.5*Number(Base.value)*Number(height.value);
}