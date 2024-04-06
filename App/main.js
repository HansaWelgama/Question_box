
let interval =undefined;
let min = 0;
let sec= 0;
let questionNumber = 0;
let count = 0;
let op = ['+','-','*','/','%'];

let qNum1=0;
let qNum2=0;
let selectedOp='';

let minElement=document.getElementById('min');
let secElement=document.getElementById('sec');

let countElement=document.getElementById('count');

let qNum1Element=document.getElementById('num1');
let qNum2Element=document.getElementById('num2');
let opElement=document.getElementById('op');

let answerElement= document.getElementById('answer');

let result= [];

const setAnswer=()=>{
    let correctAnswer=0;
    let userAnswer=parseInt(answerElement.value);
    switch(selectedOp){
        case '+':correctAnswer=qNum1+qNum2; break;
        case '-':correctAnswer=qNum1-qNum2; break;
        case '/':correctAnswer=qNum1/qNum2; break;
        case '*':correctAnswer=qNum1*qNum2; break;
        case '%':correctAnswer=qNum1%qNum2;
    }

    result.push({
        'number1':qNum1,
        'number2':qNum2,
        'correctAnswer':correctAnswer,
        'userAnswer':userAnswer,
        'operator':selectedOp,
        'time':minElement.innerHTML+':'+secElement.innerHTML,
        'isCorrect':correctAnswer===userAnswer
    });
    manageQuestion();
}
const setCount= ()=>{
    count++;
    countElement.innerHTML=count;

}
const manageQuestion= ()=>{
    setCount();
    qNum1=Math.floor(Math.random()*100)+1;
    qNum2=Math.floor(Math.random()*100)+1;
    selectedOp = op[Math.floor(Math.random()*5)];



    qNum1Element.innerHTML=qNum1;
    qNum2Element.innerHTML=qNum2;
    opElement.innerHTML=selectedOp;
    
}

const reset=()=>{
    if(interval){
        clearInterval(interval);
    }

    minElement.innerHTML='00';
    secElement.innerHTML='00';
}

const countdown = () =>{
    manageQuestion();

    if(interval){
        clearInterval(interval);
    }
    interval = setInterval(() =>{

        sec++;
        if(sec<10){
            secElement.innerHTML = '0'+sec
        }else{
            secElement.innerHTML = sec
        }
        if(sec===59){
            min++;
            if(min<10){
            minElement.innerHTML='0'+min
            }else{
            minElement.innerHTML=min
        }
            sec=0;
        }


    },1000);
}



const start = ()=>{
    reset();
    countdown();

}