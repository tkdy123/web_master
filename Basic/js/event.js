// event.js
// 화면요소에 이벤트 등록하기.
console.dir(document);
document.onclick = function(){
  // alert('클릭했습니다.')
  // document.location.href = 'https://www.daum.net';
}

document.querySelector('#showBtn').addEventListener('click', function() {
  console.log('버튼 클릭!!');
  document.querySelector('#desc').style.display = 'block';
})

// 숨기기 기능구현.
document.querySelector('#hideBtn').onclick = function() {
  document.querySelector('#desc').style.display = 'none';
}

// 이미지에 이벤트 등록.
document.querySelector('img').addEventListener('mouseover', function(){
  document.querySelector('#desc').style.display = 'block';
})
document.querySelector('img').addEventListener('mouseout', function(){
  document.querySelector('#desc').style.display = 'none';
})
// 이미지 바꾸기
let imgAry = ['다른이미지.jpg', '레드향.jpg', '고양이.jpg', '이미지.PNG']
let idx = 0;
document.querySelector('#changeImg').addEventListener('click',  function() {
  if(idx > 3) {
    idx = 0;
  }
  let imageName = imgAry[idx++];
  document.querySelector('img').src ="image/" + imageName;
})