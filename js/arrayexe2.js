let dupAry = ['홍길동', '김민혁', '장동숙', '홍길동', '홍길도', '김민']

let newAry = []
newAry = dupAry.filter(function(elem){
    if(newAry.indexOf(elem) == -1){
      newAry.push(elem)
      return true;
    }
    return false;
});
console.log(newAry)

// let tempAry = [];
newAry = dupAry.filter(function (elem,idx,ary) {
  if (ary.indexOf(elem) == idx) {
    return true;
  }
  return false
})

console.log(newAry)

