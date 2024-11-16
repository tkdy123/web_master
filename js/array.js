let numAry = new Array();
numAry[0] = 10;
numAry.push(20);
numAry.push(25);
numAry.push(35);

//첫번째 제거 shift
console.log('제거된 값' + numAry.shift());
console.log('제거된 값' + numAry.pop());
console.log(numAry)

numAry.unshift();
let sum = 0;
// console.log(numAry)
// // 배열에서 가능한 반복문
// // for of 구문 of 뒤의 리스트의 길이 만큼 반복 of 앞의 변수에 리스트의 값을 저장 in을 하면 인덱스 위치를 가져옴
// for (let number of numAry) {
//   console.log(number)
// }
// for (let number in numAry) {
//   console.log(number)
// }
//배열일 경우에 method.//forEach() 는 함수를 매개값으로 받음 forEach 앞에 배열의 갯수만큼 함수를 실행 
// numAry.forEach(function(param1,param2,param3){
//   console.log(`요소 ${param1}, 인덱스 ${param2}, 배열자신 ${param3}`)
// }); 

// numAry.forEach(function(elem,index,ary){
//   console.log(`${ary} 배열에 ${index}위치에 있는 요소 ${elem}`)
//   sum +=elem  
// })

// numAry.forEach((elem)=>{
//   sum +=elem  
// })

// numAry.forEach((elem) => sum +=elem )

numAry.forEach(elem => sum +=elem)

console.log(sum)








// let obj = {
//   name: "Hong",
//   age: 20,
//   weight: 66.7
// }

// // for in 구문 in 뒤의 오브젝트의 길이 만큼 반복 in 앞의 변수에 오브젝트의 속성을 저장 값은 저장 안하나?
// for (let prop  in obj) {
//   console.log(prop)
// }