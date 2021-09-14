const SubmitBtn= document.querySelector("#submit-ans-btn");
const output=document.querySelector("#output");
const quizForm=document.querySelector(".quiz-form");
const CorrectAns=["30°","Equilateral"];

SubmitBtn.addEventListener('click',calcScore);

function calcScore(){
let score=0;
let i=0;
const formResults=new FormData(quizForm);
for(let value of formResults.values()){
    if(value ===CorrectAns[i]){
        score+=1;
    }
    i+=1;
}
output.innerText="your score is "+ score;
}