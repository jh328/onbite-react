// Falsy
// Falsy 값은 조건문에서 flase처럼 동작을 한다.

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// if 조건문은 Truthy 값일 때만 블록 내부를 실행을 한다.
// 즉, 조건에 Falsy 값이 들어가면 실행이 되지 않기 때문에
// ! 부정 연산자를 사용을 하는거다.
// Truthy 값 -> false
// Falsy 값 -> true
if (f1) {
  console.log("falsy");
  console.log("f값 확인 ", f1);
} else {
  console.log("else");
  console.log(f1);
}

// Truthy 값
// -> 7가지 Falsy 한 값들을 제외한 나머지 모든 값
let t1 = "문자열";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t1) {
  console.log(t1);
}

// 3. 활용 사례
function printName(person) {
  if (person === undefined || person === null) {
    console.log("persone의 값이 없다. ");
    return;
  }
  console.log(person.name)
}

let person = null;
printName(person);

function printName1(person){
    if(!person){
        console.log("person의 값이 없다. ")
        return;
    }
    console.log(person.name, "ㅁㄴ아리ㅓㅁㄴㅇ;ㅣㅏ")
}

let name1 = {name:"송준한"}
printName(name1)