const rightAngleStarPattern = (row=5)=>{
  for(let i = 1; i <= row; i++){
    let line = '';
    for(let j = 1; j <= i; j++){
      line+='*';
    }
    console.log(line);
  }
}
// rightAngleStarPattern(5);


const reverseRightAngleStarPattern =(row=5)=>{
  for(let i =1; i <= row; i++){
    let line='';
    for(let j = i; j<=row; j++){
      line+='*';
    }
    console.log(line);
  }
}
// reverseRightAngleStarPattern(5);

const leftAlignedRightAngle = (row)=>{
  for(let i = 1; i <= row; i++){
    let line='';
    for(space = i; space < row; space++){
      line+=' '
    }
    for(let j = 1; j<=i;j++){
      line+='*';
    }
    console.log(line);
  }
}
// leftAlignedRightAngle(5);


const reverseLeftAlignedRightAngleStarPattern = (row = 5) =>{
  for(let i = 1; i <= row; i++){
    let line = '';
    for(space = 1; space < i; space++){
      line+=' '
    }
    for(let j = i; j <= row; j++){
      line+='*';
    }
    console.log(line);
  }
}
// console.log('reverse Left Aligned Right Angle Star Pattern');
// reverseLeftAlignedRightAngleStarPattern(5);

// que 3 
const pyramidPattern = (row) =>{
  for(let i = 1; i <= row; i++){
    line = '';
    for(space = i; space < row; space++){
      line+=' ';
    }
    for(let j = 1; j<=i; j++){
      line+='*'
    }
    for( let k = 2; k <=i; k++){
      line+='*'
    }
    console.log(line)
  }
}
// pyramidPattern(5);

// que 4
const invertedPyramidPattern = (row) =>{
  for(let i = 1; i<= row; i++){
    let line ='';
    for(let space = 1; space < i; space++){
      line+=' ';
    }for(let j = i; j <= row; j++){
      line+='*';
    }
    for(k = i+1; k <= row; k++){
      line+='*';
    }
    console.log(line);
  }
 }
//  invertedPyramidPattern(5);

//  que 5 Hollow Square Pattern

const hollowSquarePattern = (row) =>{
  for( let i = 1; i<= row; i++){
    let line = '';
    for(let j = 1; j<= row; j++){
      if(i > 1 && i< row && j > 1 && j < row){
        line+=' ';
      }
      else line+='*'
    }
    console.log(line);
  }
}
// hollowSquarePattern(5);

// 6. **Print Hollow Pyramid Pattern** 

const hollowPyramidPattern = (row)=>{
  for(let i =1; i<= row; i++){
    let line = '';
    for(let space = i; space < row; space++){
      line+=' ';
    }
    for(let j= 1; j<=i; j++){
      if(j > 1 && i<row) line+=' ';
      else line+='*';
    }
    for(let k= 2; k<=i; k++){
      if(k < i && i<row) line+=' ';
      else line+='*';
    }
    console.log(line);
  }
}
// hollowPyramidPattern(5);

// **Print Alternating Binary Triangle**

const alertnateBinaryPattern = (row) =>{
  for(let i = 1; i<=row; i++){
    let start = i % 2 === 0 ? 0 : 1;
    let line =  '';
    for(let j = 1; j<=i; j++){
      line+=`${(start + j -1 ) % 2 }`
    }
    console.log(line);
  }
}
alertnateBinaryPattern(2);