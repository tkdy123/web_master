// exe1.js

console.log('exe1.js');
let nubverAry = [10, 22, 39, 84]; // 배열변수

let param1 = prompt('첫번째 인덱스 입력하세요[0~3]');
let param2 = prompt('두번째 인덱스 입력하세요[0~3]');

let result = nubverAry[param1] + nubverAry[param2];
console.log(nubverAry[param1] + ' + ' +  nubverAry[param2] + ' = ' + result );   // 콘솔출력 22 + 84 = 106