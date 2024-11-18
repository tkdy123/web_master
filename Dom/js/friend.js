// friend.js
// children, appendchild
// this => 함수 : window 객체, 이벤트핸들러 : 이벤트대상, object : 객체자신.
// 
function makeRow(friendInfo = {name, phone, birth, bloodtype}) {
  // 이름, 연락처, 생일. => tr 생성한 후 tr 반환.
  let tr = document.createElement('tr');
  tr.addEventListener('click', function(e) { // this
    console.log(this.children[0].innerHTML);
    document.querySelector('input[name="friendName"]').value = this.children[1].innerHTML;
    document.querySelector('input[name="friendPhone"]').value = this.children[2].innerHTML;
    document.querySelector('input[name="friendBirth"]').value = this.children[3].innerHTML;
    document.querySelector('select[name="friendBloodType"]').value = this.children[4].innerHTML;
  })

  // <td><input type="checkbox"></td>
  let td = document.createElement('td');
  let checkbox = document.createElement('input');
  checkbox.setAttribute("type", "checkbox");
  td.appendChild(checkbox);
  tr.appendChild(td);

  for(let prop in friendInfo) {
    let td = document.createElement('td'); // td 생성
    let fname = friendInfo[prop];
    td.innerHTML = fname;
    tr.appendChild(td);
  }
  // <td><button>삭제</button></td>
  td = document.createElement('td');
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.setAttribute('class', 'btn btn-danger'); // 태그에 attribute 를 추가.
  btn.addEventListener('click', (e) =>{ // 삭제버튼에 클릭이벤트 등록.
    e.target.parentElement.parentElement.remove();
    
  })
  td.appendChild(btn);
  tr.appendChild(td);
  return tr;
}

// data.js
console.log(friendList);
// 배열을 활용해서 친구목록 출력.
friendList.forEach(function(friend){
  document.querySelector('#list').appendChild(makeRow(friend))});

// 추가 버튼에 이벤트.
document.querySelector('button.btn.btn-primary') //
  .addEventListener('click', (e) => {
    let fname = document.querySelector('input[name="friendName"]').value;
    let fphone = document.querySelector('input[name="friendPhone"]').value;
    let fbirth = document.querySelector('input[name="friendBirth"]').value;
    let ftype = document.querySelector('select[name="friendBloodType"]').value;
    if(!fname || !fphone || !fbirth || !ftype) {
      alert('필수값을 입력하세요.')
      return;
    }
    let param = {name:fname, phone:fphone, birth:fbirth, bloodtype:ftype}

    let tr = makeRow(param);
    document.querySelector('#list').appendChild(tr);

    // 입력값 초기화
    document.querySelector('input[name="friendName"]').value = '';
    document.querySelector('input[name="friendPhone"]').value = '';
    document.querySelector('input[name="friendBirth"]').value = '';
    document.querySelector('select[name="friendBloodType"]').value = '';
  });
  
  // 수정버튼에 이벤트.
  document.querySelector('button:nth-of-type(2)') //
    .addEventListener('click', (e) => {
      console.log('수정버튼.');
      let listTr = document.querySelectorAll('#list tr')
      let name = document.querySelector('input[name="friendName"]').value;
      let phone = document.querySelector('input[name="friendPhone"]').value;
      let birth = document.querySelector('input[name="friendBirth"]').value;
      let bloodtype = document.querySelector('select[name="friendBloodType"]').value;
      for(let i = 0; i < listTr.length; i++) {
        // 수정할 대상 찾기.
        if(listTr[i].children[1].innerHTML == name){
          // 연락처, 생일, 혈액형.
          listTr[i].children[2].innerHTML = phone;
          listTr[i].children[3].innerHTML = birth;
          listTr[i].children[4].innerHTML = bloodtype;
        }
      }
    })

    // 선택삭제 이벤트.
    document.querySelector('button.btn.btn-danger') //
    .addEventListener('click', (e) => {
      // #list input[type="checkbox"]
      document.querySelectorAll('#list tr')//
      .forEach((item) => {
        console.log(item.children[0].children[0]);
        if(item.children[0].children[0].checked) {
          item.remove(); // parentElement
        }
      });
    }); // end of 선택삭제

    // 전체선택 하는 이벤트 추가. change 이벤트.

    document.querySelector('thead input[type="checkbox"') //
      .addEventListener('change', (e) => {
        console.log('thead input[type="checkbox":nth-of-type(0)');
        let listTr = document.querySelectorAll('#list tr');
        if (document.querySelector('thead input[type="checkbox"').checked == true){
          for(let i = 0)
        }
      })