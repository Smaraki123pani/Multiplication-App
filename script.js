
const num1= Math.ceil(Math.random()*10);
const num2= Math.ceil(Math.random()*10);


const form= document.getElementById("form");
const score= document.getElementById("score");
const question= document.getElementById("question");
const input= document.getElementById("input");

let myScore= JSON.parse(localStorage.getItem("score"));

if (!myScore){
    myScore=0;
}

score.innerText= `Score:${myScore}`;
question.innerText= `What is the Answer ? 
                     ${num1} × ${num2}`;

const correctAnswer = num1 * num2;       

form.addEventListener("submit", () => {

    const answer = +input.value;

    if(answer === correctAnswer)
        {
        myScore ++;
        updateLocalStorage();
    }else{
        myScore --;
        updateLocalStorage();
    }
});

function updateLocalStorage()
{

    localStorage.setItem("score",JSON.stringify(myScore));
}