// operator.js

// document.querySelector('#add').addEventListener('click', function() {
//  document.querySelector('#result').value = parseInt(document.querySelector('#num1').value) +  parseInt(document.querySelector('#num2').value)
// })
// document.querySelector('#sub').addEventListener('click', function() {
//   document.querySelector('#result').value = parseInt(document.querySelector('#num1').value) -  parseInt(document.querySelector('#num2').value)
//  })
//  document.querySelector('#multy').addEventListener('click', function() {
//   document.querySelector('#result').value = parseInt(document.querySelector('#num1').value) *  parseInt(document.querySelector('#num2').value)
//  })
//  document.querySelector('#divid').addEventListener('click', function() {
//   document.querySelector('#result').value = parseInt(document.querySelector('#num1').value) /  parseInt(document.querySelector('#num2').value)
//  })

// 버튼에 아이디가 없을 경우
let addFnc = (e) => {
  // console.log(e.target.innerHTML);
  let v1 = document.getElementById('num1').value;
  let v2 = document.querySelector('#num2').value;
  if(!v1 || !v2){
    alert('값을 입력하세요')
    return;
  }
  let result; // 변수선언.
  if(e.target.innerHTML == '더하기') {
  result = parseInt(v1) + parseInt(v2);
 } else if(e.target.innerHTML == '빼기') {
  result = parseInt(v1) - parseInt(v2);  // parseInt() 기능 : '12' => 12
 } else if(e.target.innerHTML == '곱하기') {
  result = parseInt(v1) * parseInt(v2);
 } else if(e.target.innerHTML == '나누기') {
  result = parseInt(v1) / parseInt(v2);
 }
  document.querySelector('#result').value = result;
}
document.querySelector('#add').addEventListener('click', addFnc); // 이벤트핸들러.
document.querySelector('#sub').addEventListener('click', addFnc);
document.querySelector('#multy').addEventListener('click', addFnc);
document.querySelector('#divid').addEventListener('click', addFnc);


// let subFnc = () => {
//   let v1 = document.getElementById('num1').value;
//   let v2 = document.querySelector('#num2').value;
//   let result = parseInt(v1) - parseInt(v2);

//   document.querySelector('#result').value = result;
// }
// document.querySelector('#sub').addEventListener('click', subFnc);

// let multyFnc = () => {
//   let v1 = document.getElementById('num1').value;
//   let v2 = document.querySelector('#num2').value;
//   let result = parseInt(v1) * parseInt(v2);

//   document.querySelector('#result').value = result;
// }
// document.querySelector('button:nth-of-type(3)').addEventListener('click', multyFnc);

// let dividFnc = () => {
//   let v1 = document.getElementById('num1').value;
//   let v2 = document.querySelector('#num2').value;
//   let result = parseInt(v1) / parseInt(v2);

//   document.querySelector('#result').value = result;
// }
// document.querySelector('button:nth-of-type(4)').addEventListener('click', dividFnc);