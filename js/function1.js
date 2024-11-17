// function1.js

let numAry1 = [50, 60, 40, 70, 20]
let numAry2 = [55, 63, 42, 79, 27]

console.log(`sumAry(numAry1)의 합계 => ${sumAry(numAry1)}`);
console.log(`sumAry(numAry2)의 합계 => ${sumAry(numAry2)}`);
console.log(sumAry([10, 20, 30]));



// 매개값을 배열로 받아서 배열요소의 합.
function sumAry(param1) {
  let sum = 0;
  for (let i = 0; i < param1.length; i++) {
    sum += param1[i];
  }
  return sum;
}

function sum(param1, param2) {
  let result = param1 + param2;
  return result;
}

// 배열을 매개값으로 받아서 요소중에서 가장 큰 값을 구하는 함수.
// getMaxValue(배열)
function getMaxValue(para){
  let max = 0;
  for (let i = 0; i < para.length; i++) {
    if (max < para[i]) {
      max = para[i];
    }
  }
  return max;
}
console.log(getMaxValue(numAry2));

// Math.random() 활용해서 11 ~ 20 사이의 임의 수 생성.
// 배열 [5]에 저장.

function makeNumberFnc() {
  // 1. Math.random()=> 5번.
  let randomAry = [] // 임의의 값을 저장할 배열변수 선언.
  for (let i = 0; i < 5; i++) {
    let temp = parseInt(Math.random() * 10) + 11; 
    randomAry.push(temp); // 배열에 값 넣기
  }
  console.log(randomAry); 
  let sum = sumAry(randomAry);  
  return sum;
}
console.log(`임의의 배열의 합은 ${makeNumberFnc()} 입니다.`)