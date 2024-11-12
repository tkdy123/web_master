// aryDate1.js
document.querySelector('#inputValue').remove(); // 요소(element) 삭제
document.querySelector('#addBtn').remove(); //요소(element) 삭제
document.querySelector('span').remove(); // 요소(element) 삭제

let numAry = [23, 45, 34, 78, 51, 98];
let sum = 0, sum2 = 0, sum3 = 0;
for (let i = 0; i < numAry.length; i++) {
  console.log(`${i} 위치=> ${numAry[i]}`);
  sum += numAry[i]; // sum = sum + numAry[i]
  if (numAry[i] > 50) {
    console.log(`50이상 ${numAry[i]}`);
    sum2 += numAry[i];
  }
  if (numAry[i] % 2 == 0){
    console.log(`짝수만 ${numAry[i]}`);
    sum3 += numAry[i];
  }

}
console.log(`numAry의 각 요소의 합 = > ${sum}`);
console.log(`50이상 합 = > ${sum2}`);
console.log(`짝수의 합 = > ${sum3}`);
