// exe3.js
// 1. 태어난 년도 입력 -> 나이계산.
// 2. 직사각형 너비 계산 -> 가로길이, 세로길이 입력.
// 3. 최고값, 최소값 -> 입력숫자는 3개.

let question = 2;

if (question == 1) {
  // 1번 코드.
  let birth = prompt('태어난 년도를 입력해주세요.');
  document.write(2024 - birth + "세 입니다.");
} else if (question == 2){
  // 2번 코드.
  let width = prompt('가로길이를 입력해주세요.');
  let height = prompt('세로길이를 입력해주세요.');
  document.write(width * height);
} else {
  // 3번 코드.
  let num1 = prompt('숫자를 입력해주세요.');
  let num2 = prompt('숫자를 입력해주세요.');
  let num3 = prompt('숫자를 입력해주세요.');
  if(num1 > num2){
    
  }
}