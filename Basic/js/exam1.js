let question = 1;

if(question == 1) {
  // 3번 코드.
  let num1 = prompt('숫자를 입력해주세요.');
  let num2 = prompt('숫자를 입력해주세요.');
  let num3 = prompt('숫자를 입력해주세요.');
  let max;
  let min;
  // 동일한 값이 있으면 처리 안함.
  if (num1 == num2 || num2 == num3 || num1 == num3) {
    document.write('동일한 값이 존재합니다.')
  }// end of if(num1 == num2 || num2 == num3 || num1 == num3) 
  else {
    if (num1 > num2) {
      if (num1 > num3) {
        max = num1;
        if (num2 > num3) {
          min = num3;
        } else {
          min = num2;
        }
      }else {
        max = num3;
        min = num2;
      }
    }
    else {
      if (num2 > num3) {
        max = num2;
      }
      else {
        max = num3;
        min = num1;
      }
    }
   }
  alert('가장 큰 수는' + max + '입니다');
  alert('가장 작은 수는' + min + '입니다');}