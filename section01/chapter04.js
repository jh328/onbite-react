// 1. 변수
let age = 29;
//console.log(age);

age = 30;
//console.log(age);

// 2. 상수 
const birth = "1996.03.28";
console.log(birth);

// 상수는 값을 변화시키는게 불가능하기 때문에, 초기화가 반드시 필요하다.

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다. 
// let #name , na#me 안된다. 
let $_name // 이거는 가능하다.


// 3-2. 변수는 숫자로 시작할 수 없다. 
// let 1name 
let name1;
let $1name;


// 3-3. 예약어를 사용할 수 없다. 
// 예약어라는거는 let이나 const 처럼 JavaSCript가 이미 
// 특수한 의미로 사용하기로 `약속`한 단어들을 말한다. 
// let let , let if 


// 4. 변수 명명 가이드 
// 누가 봐도 이해할 수 있는 <변수명>을 정성스럽게 지어주는게 나중에 직접 수정하거나 협업을 할 떄에도 서로 알아보기가 편하다. 

let salesCount =1;
let refundCount =1;
let totalSalesCount = salesCount - refundCount;