// forLoop.js
// 1 ~ 5 까지 합 => sum 변수 누적.
let sum = 0;
sum = sum + 1;
sum = sum + 2;
sum = sum + 3;
sum = sum + 4;
sum = sum + 5;

// let i = 0;   = for (let i = 1; i <= 5; i++)
// i = i + 1;

sum = 10 % 3;  // % : 나누고 나머지 값

console.log('1 ~ 5 까지의 합 : ' + sum);
sum = 0; // 초기화

for (let i = 1; i <= 10; i++) {  // for(초깃값; 조건; 증가식)     // i++ 1씩 증가 i+= 2 2씩 증가
  console.log('sum=> ' + sum + ', 1=> ' + i)
  if (i % 2 == 1){ // 홀수값만 누적.   i % 2 == 1 <- 홀수값   i % 2 == 0 <- 짝수값
    sum = sum + i; // i 값 : 1, i 값 : 2, 
  }
  // if(i == 7) {
  //   break;
  // }
}
console.log('1 ~ 10 까지의 합 : ' + sum);
