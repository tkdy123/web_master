// forExe2.js
// 1 ~ 10 까지의 2의 배수, 3의 배수 => sum2, sum3 변수

let sum2 = 0 ,sum3 = 0;

for(let i = 1; i <= 10; i++){
  if(i % 2 == 0){
    sum2 = sum2 + i;
  }
  if(i % 3 == 0){
    sum3 = sum3 + i;
  }
}
// ` 사용
console.log('2의 배수의 합은' + sum2 + '   3의 배수의 합은' + sum3)