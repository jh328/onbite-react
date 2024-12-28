/* function funcA() {
  console.log("FucnA");
} // 이 함수는 선언식이다.

let varA = funcA;

console.log("varA 호출 : ", varA);

let varB = function() {
  console.log("funcB");
}; // 익명함수

console.log("funcB 호출 : ", varB());

// 위의 코드는 콜백함수에서 자주 사용한다. */

// 2. 화살표 함수.
let varC = () => {
  return 1;
};

let varCc = () => 1;

// varC , varCc 둘다 똑같다.

let varD = (value) => {
  return value + 1;
};

let result = varD(10);
console.log("varD 결과 값 ", result)
