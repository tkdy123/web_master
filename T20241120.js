// T20241120.js

function makeRow(bookInfo = {
  code,
  name,
  writer,
  publisher,
  price
}) {
  let tr = document.createElement('tr');
  tr.addEventListener('click', function (e) {
    document.querySelector('input[name="bookCode"]').value = this.children[1].innerHTML;
    document.querySelector('input[name="bookName"]').value = this.children[2].innerHTML;
    document.querySelector('input[name="author"]').value = this.children[3].innerHTML;
    document.querySelector('input[name="press"]').value = this.children[4].innerHTML;
    document.querySelector('input[name="price"]').value = this.children[5].innerHTML;
  });

  
  let td = document.createElement('td');
  let checkbox = document.createElement('input');
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener('click', (e) => { e.stopPropagation()});
  checkbox.addEventListener('change', (e) => {
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    let chkeds = document.querySelectorAll('tbody input[type="checkbox"]:checked');
    console.log(chks.length, chkeds.length);

    document.querySelector('thead input[type="checkbox"]').checked =
    chks.length == chkeds.length ? true : false;});

  td.appendChild(checkbox);
  tr.appendChild(td);

  for (let prop in bookInfo) {
    let td = document.createElement('td'); // td 생성
    let fcode = bookInfo[prop];
    td.innerHTML = fcode;
    tr.appendChild(td);
  }

  td = document.createElement('td');
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    e.target.parentElement.parentElement.remove();
  });

  td.appendChild(btn);
  tr.appendChild(td);
  return tr;
}

bookList.forEach(function (book) {
  document.querySelector('#list').appendChild(makeRow(book))});

document.querySelector('#save')
  .addEventListener('click', (e) => {
    let fcode = document.querySelector('input[name="bookCode"]').value;
    let fname = document.querySelector('input[name="bookName"]').value;
    let fauthor = document.querySelector('input[name="author"]').value;
    let fpress = document.querySelector('input[name="press"]').value;
    let fprice = document.querySelector('input[name="price"]').value;
    if (!fcode || !fname || !fauthor || !fpress || !fprice) {
      alert('필수값을 입력하세요.')
      return;
    }
    let param = {
      code: fcode,
      name: fname,
      author: fauthor,
      press: fpress,
      price: fprice
    }

    let tr = makeRow(param);
    document.querySelector('#list').appendChild(tr);

    document.querySelector('input[name="bookCode"]').value = '';
    document.querySelector('input[name="bookName"]').value = '';
    document.querySelector('input[name="author"]').value = '';
    document.querySelector('input[name="press"]').value = '';
    document.querySelector('input[name="price"]').value = '';
  });

document.querySelector('#delete').addEventListener('click', (e) => {
  document.querySelectorAll('#list tr').forEach((item) => {
    console.log(item.children[0].children[0]);
    if (item.children[0].children[0].checked) {
      item.remove();
    }
  });
});

document.querySelector('thead input[type="checkbox"]').addEventListener('change', (e) => {
  document.querySelectorAll('tbody input[type="checkbox"]').forEach((item) => item.checked = e.target.checked);
});