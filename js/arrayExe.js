let numAry = [34];

numAry.unshift(24,44)
numAry.push(83,22)

console.log(numAry)

numAry[0] = 77
console.log(numAry)

numAry.splice(1,0,55) // 1 번 째부터 1개를 55로 바꿈 첫번째 = 인덱스 두번쨰 = 갯수 0 이면 추가 세번째 = 뭘로 없으먄 삭제
console.log(numAry)

let dayAry=[];//일 월 화 수 목 금 토 일 월 화 시 목 금 토 일
dayAry.splice(0,0,'수요일')
dayAry.splice(0,0,'화요일')
dayAry.splice(2,0,'토요일')
dayAry.splice(2,0,'금요일')
dayAry.splice(0,0,'월요일')
dayAry.splice(0,0,'일요일')
dayAry.splice(4,0,'목요일')
console.log(dayAry)


console.log(dayAry.indexOf('화요일'))