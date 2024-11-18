



let numAry= [34];



numAry.unshift(24, 44);
numAry.push(83, 22);
console.log(numAry);
console.log(numAry.shift());
numAry.unshift(77);
console.log(numAry);

numAry.splice(1, 1, 55);
console.log(numAry);


let dayAry = []; //요일 : 일요일 ~토요일

//수요일, 화요일, 토요일, 금요일, 월요일, 일요일, 목요일, 

//위에서 차례대로 내려오면서 인덱스 차례를 나열함

dayAry.splice(0, 0, '토요일');
dayAry.splice(0, 0, '수요일');
dayAry.splice(0, 0, '화요일');
dayAry.splice(2, 0, '금요일');
dayAry.splice(2, 0, '목요일');
dayAry.splice(0, 0, '일요일');
dayAry.splice(1, 0, '월요일');
console.log(dayAry);


console.log(dayAry.indexOf('화요일'));