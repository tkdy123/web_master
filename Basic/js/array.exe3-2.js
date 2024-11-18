let numAry = [];
for ( let i = 0; i < 5; i++){
  let temp = parseInt(Math.random() * 50) + 51
  numAry [i] = temp;
}
console.log(numAry);

let max = 51;
let min = 100;
for(let i=0; i<=numAry.length; i++){
  if(max < numAry[i]){
    max = numAry[i];
  }
  if(min > numAry[i]){
    min = numAry[i];
  }
}
console.log(max,min)