// 1. 배열 생성 방법은 두 가지 있다.
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [1, 2, 3];
console.log("배열을 확인하는 코드 : ", arrC);

// 배열에는 어떤 타입의 값이든 자유롭게 다 넣을 수 있따.
// boolean , 문자열, null, undefinded, 화살표 함수, 객체, 새로운 배열
// 어떤 타입의 값도 다 저장을 할 수 있다.
// 쉽게 순차적으로 보관할 수 있다.
// -->

let arrD = [
  1, // 숫자
  2, // 숫자
  3, // 숫자
  "문자열",
  true, // boolean
  false, // boolean
  () => {}, // 화살표 함수,
  {}, // 객체 리터럴,
  [1, 2, 3], // 새로운 배열
];

console.log("주석 설명 : ", arrD);

// 2. 배열 요소 접근,
// 배열이라는 자료형은 순서대로 값을 저장하기 때문에
// 각각의 원소에 번호로 접근을 할 수 있다.

let item1 = arrD[0];
console.log("아이템 1 배열 값 확인 : ", item1);

let item2 = arrD[3];
console.log("아이템 2 배열 값 확인 :", item2);

let item3 = arrD[5];
console.log("아이템 2 배열 값 확인 :", item3);

// 특정 원소의 값을 수정 하는 방법 ->
arrD[3] = "문자열 -> 수정합니다.";
console.log(arrD[3]);

console.log(arrD)