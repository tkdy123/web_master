// exe3.js
// 1. 태어난 년도 입력 -> 나이계산.
// 2. 직사각형 너비 계산 -> 가로길이, 세로길이 입력.
// 3. 최고값, 최소값 -> 입력숫자는 3개.

let question = 3;
let result = 0;

if (question == 1) {
  // 1번 코드.
  let birth = prompt('태어난 년도를 입력해주세요.');
  const year = 2024;
  result = year - birth;
  document.write(result + "세 입니다.");
  alert('나이는 ' + (result) + '세 입니다.');
} else if (question == 2) {
  // 2번 코드.
  let width = prompt('가로길이를 입력해주세요.');
  let height = prompt('세로길이를 입력해주세요.');
  result = width * height;
  document.write(result);
  alert('직사각형의 너비는 ' + (result) + '입니다.');
}
// 집
else {
  // 3번 코드.
  let num1 = Number(prompt('숫자를 입력해주세요.'));
  let num2 = Number(prompt('숫자를 입력해주세요.'));
  let num3 = Number(prompt('숫자를 입력해주세요.'));
  let max, min = 0;
  if (num1 > num2) {
    if (num1 > num3) {
      max = num1;
    } else {
      max = num3;
    }
  } else {
    if (num2 > num3) {
      max = num2;
    } else {
      max = num3;
    }
  }
  if (num1 > num2) {
    if (num2 > num3) {
      min = num3;
    } else {
      mim = num2;
    }
  } else {
    if (num3 > num1) {
      min = num1;
    }
  }
  alert('가장 큰 수는' + max + '입니다');
  alert('가장 작은 수는' + min + '입니다');
}

// 학원

// let question = 1;

// if(question == 1) {
//   // 3번 코드.
//   let num1 = Number(prompt('숫자를 입력해주세요.'));
//   let num2 = Number(prompt('숫자를 입력해주세요.'));
//   let num3 = Number(prompt('숫자를 입력해주세요.'));
//   let max;
//   let min;
//   // 동일한 값이 있으면 처리 안함.
//   if (num1 == num2 || num2 == num3 || num1 == num3) {
//     document.write('동일한 값이 존재합니다.')
//   }// end of if(num1 == num2 || num2 == num3 || num1 == num3)
//   else {
//     if (num1 > num2) {
//       if (num1 > num3) {
//         max = num1;
//         if (num2 > num3) {
//           min = num3;
//         } else {
//           min = num2;
//         }
//       }else {
//         max = num3;
//         min = num2;
//       }
//     }
//     else {
//       if (num2 > num3) {
//         max = num2;
//       }
//       else {
//         max = num3;
//         min = num1;
//       }
//     }
//    }
//   alert('가장 큰 수는' + max + '입니다');
//   alert('가장 작은 수는' + min + '입니다');}