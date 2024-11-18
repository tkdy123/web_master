/*
basic.js
*/

// Document Object : 객체(속성, 메소드)
let ulDom = document.querySelector('ul');
//ulDom.children
console.log(ulDom.children[0].innerHTML);
// DOM 객체에는 메소드(객체생성 메소드 : createElement()).
let liTag = document.createElement('li'); // <li></li> 요소를 생성.
liTag.innerHTML = '수박'; //  <li>수박</li>
ulDom.appendChild(liTag); // ulDom 요소의 자식요소로 liTag 등록.


// div #show에 p 태그 넣기
let pTag = document.createElement('p');
pTag.innerHTML = '<b>Welcome</b>';
document.querySelector('#show').appendChild(pTag);

// div #show에 button 태그 넣기
let buttonTag = document.createElement('button');
buttonTag.innerText = '삭제';
buttonTag.addEventListener('click', (e) => {
  // console.log(e.target.previousElementSibling.remove()); // 화면 요소 삭제. Welcome
  // document.querySelector('ul').children[0].remove(); // 화면 요소 삭제. <li>사과</li> 
  document.querySelector('ul>li:nth-of-type(1)').remove();
})
document.querySelector('#show').appendChild(buttonTag);


// 수박 추가
// let children = ulDom = document.querySelector('ul').innerHTML;
// children += '<li>수박</li>';
// document.querySelector('ul').innerHTML = children;