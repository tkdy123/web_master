document.querySelector('#inputValue').remove(); // 요소(element) 삭제
document.querySelector('#addBtn').remove(); //요소(element) 삭제
document.querySelector('span').remove(); // 요소(element) 삭제
// exe4.js
// 2024년 11월 12일 숙제.
// 우리반에는 5명의 친구. 성적을 입력.
// 합산 => 평균, 최고점수, 최저점수 구해서 
// 우리반 평균은 ??이고, 최고점은 ??이고, 최저점은 ??이다.

let friends = [];
let sum = 0, avg = 0, max = 0, min = 101;

for (let i = 0; i < 5; i++) {
  let a = prompt('점수를 입력하세요.')
  friends.push(a);
  sum += friends[i];
  avg = sum/friends.length;
  if (max < friends[i]) {
    max = friends[i];
  }
  if (min > friends[i]) {
    min = friends[i];
  }
}
console.log(`우리반 평균은 ${avg}이고, 최고점은 ${max}이고, 최저점은 ${min}이다.`);