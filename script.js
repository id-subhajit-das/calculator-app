const allClear = document.querySelector(".all-clear");
const clear = document.querySelector(".clear");
const plusMinus = document.querySelector(".plus-minus");
const percentage = document.querySelector(".percentage");
const root =document.querySelector('.root')
const decimal = document.querySelector('.decimal')
const factorial = document.querySelector('.factorial')
const equal = document.querySelector(".equal-operator");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const display = document.querySelector("span");
const notify = document.querySelector('.notify')


let numValue1 = 0;
let numValue2 = 0;
let result = 0;
let op = "";
let tempOperator=0
let pieValue=3.14
number.forEach((item) => {
  item.addEventListener("click", () => {
    if (display.innerHTML === "0" || display.innerHTML === 0) {
      display.innerHTML = "";
    }
    display.innerHTML += item.innerHTML;
    if(display.innerHTML.length>=19){
      notify.style.display='block' 
      notify.innerHTML="please enter maximum 16 digit number or 14 digits after decimal point"
      display.innerHTML=display.innerHTML.slice(0,-1)
      const timeOut = setTimeout(()=>{
         notify.style.display='none'
      },10000)
    }
  });
});

operator.forEach((item) => {
  item.addEventListener("click", () => {
    if(display.innerHTML==='0'||display.innerHTML==='0+'||display.innerHTML==='0÷'||display.innerHTML.includes('++')==true||display.innerHTML.includes('--')==true||display.innerHTML.includes("×")==true||display.innerHTML.includes("÷")==true||display.innerHTML.includes("^")==true){
      display.innerHTML=''
    }
    numValue1 =Number(display.innerHTML);
    op =item.innerHTML
    display.innerHTML=numValue1+op
  });
});

if(op!=='√'||op!=='x!'){

equal.addEventListener("click", () => {
    console.log(display.innerHTML)
    tempOperator = display.innerHTML.indexOf(op)
    numValue2=display.innerHTML.slice(tempOperator+1)==='π'?pieValue:Number(display.innerHTML.slice(tempOperator+1))
    console.log(numValue2)

  switch (op) {
    case "+":
      result = numValue1 + numValue2;
      result=String(result).includes('.')?result.toFixed(2):result
      display.innerHTML.length>=19?display.innerHTML.style.fontsize='20px':""
      display.innerHTML=Number(result)
      break
    case "-":
      result = numValue1 - numValue2;
      result=String(result).includes('.')?result.toFixed(2):result
      display.innerHTML.length>=19?display.innerHTML.style.fontsize='20px':""
      display.innerHTML=Number(result)
      break
  
    case "×":
      result = numValue1 * numValue2;
      result=String(result).includes('.')?result.toFixed(2):result
      display.innerHTML.length>=19?display.innerHTML.style.fontsize='20px':""
      display.innerHTML=Number(result)
      break 
  
    case "÷":
      result = numValue1 /numValue2;
      result=String(result).includes('.')?result.toFixed(2):result
      display.innerHTML.length>=19?display.innerHTML.style.fontsize='20px':""
      display.innerHTML=Number(result)
      break

    case "^":
      if(numValue1===0){
        result=0
        display.innerHTML=result
      }
      else if(numValue2===0){
        result=1
        display.innerHTML=result
      }else{
      result = Math.pow(numValue1,numValue2)
      result=String(result).includes('.')?result.toFixed(2):result
      display.innerHTML.length>=19?display.innerHTML.style.fontsize='20px':""
      display.innerHTML=Number(result)
      }
      break

  }
});
}


root.addEventListener('click',()=>{
  numValue1=Number(display.innerHTML)
  result = Math.sqrt(numValue1)
  result=String(result).includes('.')?result.toFixed(2):result
      display.innerHTML.length>=19?display.innerHTML.style.fontsize='20px':""
  display.innerHTML=Number(result)
})

factorial.addEventListener('click',()=>{
  if(numValue1===0||numValue1===1){
    result=1
    display.innerHTML=result
  }
  else{
  result=1
  numValue1=Number(display.innerHTML)
  for(let i=1;i<=numValue1;i++){
    result=result *i
  }
  result=String(result).includes('.')?result.toFixed(2):result
  display.innerHTML.length>=19?display.innerHTML.style.fontsize='20px':""
  display.innerHTML=Number(result)
}
})
allClear.addEventListener('click', () => {
    display.innerHTML = ''
    numValue1 = 0
    numValue2 = 0
    result = 0
})

clear.addEventListener('click', () => {
    if (display.innerHTML === "Infinity" ||
        display.innerHTML === "-Infinity" ||
        display.innerHTML === "-NaN" ||
        display.innerHTML === "NaN" ||
        display.innerHTML === "Error") display.innerHTML = ""
    display.innerHTML = display.innerHTML.slice(0, -1)
})

percentage.addEventListener('click', () => {
    numValue1=Number(display.innerHTML)
    result = numValue1 / 100
  display.innerHTML=result.toFixed(2)
  display.innerHTML.length>=19?display.innerHTML.style.fontsize='20px':""

})

plusMinus.addEventListener('click', () => {
    display.innerHTML *= -1
})

decimal.addEventListener('click', () => {
    if(!display.innerHTML.includes(decimal.innerHTML)){
        display.innerHTML += decimal.innerHTML
    }
     
})