// array2

let numAry = [23,32,56,34,77,90]

numAry.forEach((a,ind) => console.log(ind +' : '+a))

// 조건을 만족하는 새로운 배열 생성
let newAry = numAry.filter(function(num){
  if(num>50){
    return true;
  }
  return false;
});

console.log(newAry)

let fruits = ['apple','cherry','banana','melon']

let efruits = fruits.filter(function(elem){
  console.log(elem)
    if(elem.indexOf('e') != -1){//indexOf는 문자가 있으면 있는 위치를 반환하고 없으면 -1을 반환한다
      return true;
    }
    return false;
});
console.log(efruits)