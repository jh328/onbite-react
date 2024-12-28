/* // 단락평가
function returnFalse() {
  console.log("False 함수 호출 ");
  return false;
}

function returnTrue() {
  console.log("True 함수 호출 ");
  return true;
}

console.log(returnTrue() && returnFalse());
console.log(returnTrue() || returnFalse());
// true 함수는 호출이 안된다.

// 단락평가는 Truhty, Falsy 한 값도 된다.

function returnFalsy() {
  console.log("Falsy 한 값");
  return undefined;
}

function returnTruthy() {
  console.log("Truhty");
  return 10;
}

console.log(returnFalsy() && returnTruthy());
console.log("===============================")
console.log(returnTruthy() || returnFalsy());
 */

// 단략 평가 활용 사례
function person() {
  if (!person) {
    console.log("person 값이 없음.");
    return;
  }
  console.log(person.name);
}
// 위의 person 함수를 단략 평가를 사용을 하면 더 간결해진다.

function person2(person) {
  console.log(person && person.name);
}

person2();

// person2를 더 멋있게 만들어보기 

function person3(person){
    const name = person && person.name
    console.log(name || "person의 값이 없다.")
}

person3({name : "송준한"})