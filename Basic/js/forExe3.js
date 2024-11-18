// forExe3.js
// 점수를 입력 * 5번.
// 점수의 합(sum), 평균(avg) 저장.
// 큰값(max), 최소값(min) 저장.


// 합계는 ?? 이고, 평균은 ?? 이고, 최고점수는 ?? 입니다.

let sum = 0, avg = 0, max = 0, min = 123;
for(let i = 1; i <= 5; i++){
  let exam = parseInt(prompt('점수를 입력하세요'));
  sum = sum + parseInt(exam);
  //조건문 : max < exam 50, 70, 80, 60, 90
  if (max < exam){
    max = exam;
  }
  if (min > exam){
    min = exam;
  }
}
avg = sum / 5;
document.write(`합계는 ${sum} 이고, 평균은 ${avg} 이고, 최고점수는 ${max} , 최저점수는 ${min} 입니다.`);

