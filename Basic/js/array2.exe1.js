let dupAry = ['홍길동', '김민혁', '장동숙', '홍길동', '홍길도', '김민']

let newAry = [];

let newpAry = dupAry.filter(function(dupname){
  console.log(dupname);
  if(newAry.indexOf(dupname) == -1) {
    newAry.push(dupname)
    return true;
  }
  return false;
});



console.log(newAry); // [['홍길동', '김민혁', '장동숙', '홍길도', '김민']



