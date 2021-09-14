const sides=document.querySelectorAll(".side-input");
const HypoBtn=document.querySelector("#hypo-btn");
const output=document.querySelector("#output");

HypoBtn.addEventListener('click',CalcHypo)


function CalcHypo(){
const SumSqr=CalcSumOfSqr(Number(sides[0].value),Number(sides[1].value));
const lengthHypo=Math.sqrt(SumSqr);
output.innerText="length of hypotenuse  "+lengthHypo;
}

function CalcSumOfSqr(a,b){
    const sumSqr=a*a+b*b;
    return sumSqr;

}