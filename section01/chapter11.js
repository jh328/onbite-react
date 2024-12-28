/* function greetring() {
  console.log("이렇게 만든 함수를 함수선언이라고 한다. ");
} // 이 코드는 함수선언이다.

console.log("호출전")
greetring();
console.log("호출 후 ")

 */


console.log("oblong 호출 전 ");
let result = oblong(10, 10);
console.log("호출 후 결과 값 : ", result)

console.log("ㅁㄴㅇㄹ", result)

// 함수의 문법이 아래에 있는데 호출이 되는 이유는
// 자바스크립트의 "호이스팅 때문에 그렇다."
// 호이스팅이라는건 우리말로 끌어올린다는거다.
// 밑바닥에 작성된 함수를 위로 끌어올려줘서 실행을 시켜준다. 

function oblong(width, height) {
  const Area = width * height;
  return Area;
  console.log("함수 안 값 : ", Area)
}

