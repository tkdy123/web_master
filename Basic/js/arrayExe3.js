/*
let friendAry = [
  { name: '홍길동', age: 20, weight: 56.7 },
  { name: '김민기', age: 21, weight: 93.7 },
  { name: '박철순', age: 22, weight: 79.7 },
  { name: '이만수', age: 23, weight: 88.7 },
]

// 포이치는 리턴값이 없어서 새로운 배열이 나오지 않음 필터는 리스트를 반환해줌
let temp1 = friendAry.filter((friend) => {
  if (friend.weight > 60) {
    console.log(friend.name)
    return true;
  }
  return true;
})
console.log(temp1)

let temp2 = friendAry.forEach((friend) => {
  if (friend.weight > 60) {
    console.log(friend.name)
  }
})
console.log(temp2)
*/

let femaleAry = empAry.filter(emp => emp.gender == 'Female' && emp.salary > 5000);

//   if(emp.gender == 'Female' && emp.salary > 5000){
//     return true;
//   }
//   return false;
// })
console.log(femaleAry);