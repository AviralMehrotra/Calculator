let runningTotal=0;// keeping track of what is being typed
let buffer="0"; //waiting for user to input
let prevOperator;
const screen = document.querySelector(".disp")

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    rerender();
}

function handleNumber(value){
    if(buffer==="0"){
        buffer=value;
    }
    else{
        buffer+=value;
    }
}

function handleSymbol(value){
    switch (value) {
        case 'C':
            buffer="0";
            runningTotal=0;
            break;
        case '=':
            if(prevOperator===null){
                return;
            }
            flushOperation(parseInt(buffer));
            prevOperator=null;
            buffer=+ runningTotal;
            runningTotal=0;
            break;
        case '←':
            if(buffer.length===1){
                buffer="0";
            }
            else{
                buffer=buffer.substring(0, buffer.length-1);
            }
            break;        
        default: 
            handleMath(math);
            break;
    }
}

function handleMath(value) {
    if (buffer === "0") {
      // do nothing
      return;
    }
  
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
      runningTotal = intBuffer;
    } else {
      flushOperation(intBuffer);
    }
  
    prevOperator = value;
  
    buffer = "0";
}

prevOperator= value;
buffer="0";

function flushOperation(intBuffer){
    if(prevOperator==="+"){
        runningTotal+=intBuffer;
    }
    else if(prevOperator==="-"){
        runningTotal-=intBuffer;
    }
    else if(prevOperator==="×"){
        runningTotal*=intBuffer;
    }
    else if(prevOperator==="÷"){
        runningTotal/=intBuffer;
    }
}

function rerender() {
    screen.innerText= buffer;
}

document.querySelector('.calc-buttons')
    .addEventListener("click",function(event){
    buttonClick(event.target.innerText);
})