// question 1 
const maxOfThree = (a,b,c)=>{
  let max;
  if(a > b && a > c) max = a;
  else if(b > a && b > c) max = b;
  else max = c;
  console.log(max);
}
// maxOfThree(14,6,7);

const checkNumber = (num) =>{
  if(num > 0) msg = `${num} is positive`;
  else if(num < 0) msg = `${num} is negative`;
  else msg = `number is zero`;
  console.log(msg);
}
// checkNumber(6);

const calculateElectricBill = (unit) =>{
  let bill;
  if(unit <= 100){
    bill = unit*5;
  }  else if(unit > 100 && unit <= 200){
    bill = 100*5 + (unit-100)*7;
  }  else if(unit > 200 && unit <= 300){
    bill = 100*5 + 100*7 + (unit - 200)*10;
  }else{
    bill = 100*5 + 100*7 + 100*10 + (unit - 300)*12;
  }
  console.log(`Total Bill = ${bill}`);
}
// calculateElectricBill(230);

const checkVowel = (char)=>{
  let lowerChar = char.toLowerCase();
  if('aeiou'.includes(lowerChar)){
    console.log(`${char} is vowel`);
  }else{
    console.log(`${char} is consonant`);
  }
}
// checkVowel('a');
// checkVowel('D');

const isLeapYear = (year) => {
  if(year % 400 === 0 || (year % 4 === 0 && year %100 !== 0)){
    return true;
  }else{
    return false;
  }
}
// checkLeapYear(2030);


// H.W 
// 

const checkCharacter = (char)=>{
  const num = /[\d]/.test(char);
  const lower = /[a-z]/.test(char);
  const upper = /[A-Z]/.test(char)
  let res;
  if(num) res = 'number';
  else if(lower) res = 'lower';
  else if(upper) res = 'upper';
  else res = 'special';
  console.log(res);
}

checkCharacter(8)
checkCharacter('A')
checkCharacter('f')
checkCharacter('$')








// 2.
const checkTriangle = (a,b,c) => {
  let res;
  if(a === b && a === c && b === c){
    res = 'Equilateral';
  }else if( a === b || b === c || a === c){
    res = 'Isosceles';
  }else if( a*a + b*b == c*c){
    res = 'Right-angled';
  } else{
    res = 'Scalene'
  }
  console.log(res);
}
// checkTriangle(3,3,4);
// checkTriangle(3,4,5);
// checkTriangle(3,3,3);
// checkTriangle(3,6,8);

