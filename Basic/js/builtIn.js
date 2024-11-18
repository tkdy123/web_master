// builtIn.js (내장객체)
// 날짜(Date 객체)

let today = new Date(); // Date객체.
today.setFullYear(2023);
today.setMonth(4);
today.setDate(31);


console.log(today);
console.log(showTime(today));
console.log(today.getFullYear()); // 년도.
console.log(`${today.getMonth() + 1}월, ${today.getDate()}일, ${today.getDay()}요일`);
// today.getHours()+today.getMinutes()+today.getSeconds();

function showTime(time = new Date()) {
  // 2024-11-13 14:22:23 포맷.
  let yyyy = time.getFullYear(); // 2024
  let MM = time.getMonth() + 1; // 11월
  let dd = time.getDate(); // 14

  let HH = time.getHours();
  let mm = time.getMinutes();
  let ss = time.getSeconds(); // Number
  // console.log(('' + ss).length); // 2-> '222'
  ss = ('' + ss).length == 1 ? '0' + ss : ss; // 00 ~ 09

  // 월요일,
  let day = time.getDay();
  let days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]

  return yyyy + '-' + MM + '-' + dd + ' ' + HH + ':' + mm + ':' + ss + '' + days[day];
}