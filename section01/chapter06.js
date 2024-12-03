// 1. 묵시적 형 변환 
// 자바스크립트 엔진이 알아서 형 변환을 하는걸 말한다. 

let num = 10;
let str = "20"

const result = num + str;
// console.log("result 값 : ", result);

// 2. 명시적 형 변환 
// 프로그래머(개발자)가 내장함수 등을 이용해서 직접 형 변환을 명시한다. 
// 문자열을 숫자로 변환을 하면,
let str1 = "10"
let strToNum1 = Number(str1)
// console.log(10+strToNum1);

let str2="10개";

let strToNum2=Number(str2)
// console.log(strToNum2);

let strToNum3=parseInt(str2)
console.log(strToNum3);
// parseInt 내장 함수는 숫자값이 아닌 문자열도 숫자값으로 변환을 해주는거다. 
// 이때 주의는 문자열이 앞에 있으면 주의를 해야한다. 숫자가 앞에 있어야 한다. 
// asdfasdf10 (x) 10+asdfasdf(o)

// -> 숫자 -> 문자열
let num1=20;
let numTostr1=String(num1)
console.log(numTostr1 + "입니다.");
