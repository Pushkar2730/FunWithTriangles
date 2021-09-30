const sides=document.querySelectorAll(".side-input");
const HypoBtn=document.querySelector("#hypo-btn");
const output=document.querySelector("#out");

HypoBtn.addEventListener('click',CalcHypo)


function CalcHypo(){
const SumSqr=CalcSumOfSqr(Number(sides[0].value),Number(sides[1].value));
let lengthHypo=Math.sqrt(SumSqr);
const len=lengthHypo.toFixed(2);
output.innerText="length of hypotenuse  "+len;
}

function CalcSumOfSqr(a,b){
    const sumSqr=a*a+b*b;
    return sumSqr;

}