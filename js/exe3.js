// exe3.js
// 1. 태어난 년도 입력 -> 나이계산.
// 2. 직사각형 너비 계산 -> 가로길이, 세로길이 입력.
// 3. 최고값, 최소값 -> 입력숫자는 3개.

let question = 3;

if (question == 1) {
  // 1번 코드.
  let birth = prompt('태어난 년도를 입력해주세요.');
  document.write(2024 - birth + "세 입니다.");
} else if (question == 2) {
  // 2번 코드.
  let width = prompt('가로길이를 입력해주세요.');
  let height = prompt('세로길이를 입력해주세요.');
  document.write(width * height);
}
else {
  // 3번 코드.
  let num1 = prompt('숫자를 입력해주세요.');
  let num2 = prompt('숫자를 입력해주세요.');
  let num3 = prompt('숫자를 입력해주세요.');
  let max;
  let min;
  if (num1 > num2) {
    if (num1 > num3) {
      max = num1;
    }
    else {
      max = num3;
    }
  }
  else {
    if (num2 > num3) {
      max = num2;
    }
    else {
      max = num3;
    }             
  }
  if (num1 > num2) {
    if (num2 > num3) {
      min = num3;
    }
    else {
      mim = num2;
    }
  }
  else {
    if (num3 > num1) {
      min = num1;
    }
  }
  alert('가장 큰 수는' + max + '입니다');
  alert('가장 작은 수는' + min + '입니다');
}