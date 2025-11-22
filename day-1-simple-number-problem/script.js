const numEl = document.getElementById('num1');
const btn = document.getElementById('printBtn');
const btnRev = document.getElementById('printBtn1');


btn.disabled = true;
btnRev.disabled = true;

numEl.addEventListener('input',()=>{
  if(numEl.value.trim() !== ''){
    btn.disabled = false;
    btnRev.disabled = false;
  }
})

// question 1
btn.addEventListener('click',()=>{
  const val = numEl.value;
  for(let i = 1; i <= val; i++){
    console.log(i);
  }
})

// question 2
btnRev.addEventListener('click',()=>{
  const val = numEl.value;
  for(let i = 1; i <= val; i++){
    console.log(val - i + 1);
  }
})

// question 3 
let num = 20;
for(let i =1; i<= num; i++){
  if(i%2 ==0 ){
    // console.log(i);
  }
}

// question 4 
getSomeOfNaturalNumbers =(n) =>{
  const sum = n*(n+1)/2;
  // console.log(sum);
}
// getSomeOfNaturalNumbers(10);


// question 5
const calculateFactorial = (val) =>{
  let sum = 1;
  for(let i = 1; i<= val; i++){
    sum*=i;
  }
  console.log(sum);
}
calculateFactorial(5);

// question 6 
const sumOfEvenNumbersUpto = (limit) =>{
  let sum = 0;
  for(let i = 2; i<= limit; i++){
    if(i %2 == 0) {
      sum+=i
    }
  }
  console.log(sum);
}
sumOfEvenNumbersUpto(10);

// question 7
const suaresOfFirstNumbers = (limit) =>{
  for(let i = 1; i<= limit; i++){
    // console.log(i*i);
    console.log(Math.pow(i,2));
  }
}
suaresOfFirstNumbers(5);

// H.W
// 1
let num1 = 100
for(let i = 1; i<=num1; i++){
  if( i%3==0 && i%5==0){
    console.log(i);
  }
}

// 2 sum of odd numbers
const sumOfOddNumbers = (num) =>{
  let sum = 0;
  for(let i = 1; i<=num; i++){
    if( i%2 != 0){
      sum+=i;
    }
  }
  console.log(sum);
}
sumOfOddNumbers(10);

// 3
const cubesOfFirstNumbers = (n) =>{
  for(let i = 1; i<= n; i++){
    // console.log(i*i *i);
    console.log(Math.pow(i,3));
  }
}
cubesOfFirstNumbers(5);

// 4
const getEvenAndPerfectSquareNumber = (limit) =>{
  for(let i = 1; i <= limit; i++){
    if(i % 2 === 0 && Number.isInteger(Math.sqrt(i))){
      console.log(i);
    }
  }
}
getEvenAndPerfectSquareNumber(20);