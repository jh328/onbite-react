// 1. null 병합 연산잔,
// 존재하는 값을 추려내는 기능을 한다. 
// 널이나 언디파인드 값을 제외하는 값을 찾아내는거다. 
// ?? 이게 null 병합 연산자이다.

let var1;
let var2=10
let var3=20

let var4= var1 ?? var2
// console.log(var4);

let var5 = var1??var3;
//console.log(var5);

// 피연산자 모두 null, undefined가 아니면, 좌측에 있는 피연산자의 값이 출력이 된다. 
let var6 = var2 ?? var3;
//console.log("확인 하는 로그 :",var6);

// 실무에서 회원가입을 할 때 잘 사용이 된다. 
let userName;
let nickName= "Song"
let displayName = userName ?? nickName
//console.log(displayName);

// 2. typeof 연산자
// 값의 타입을 문자열로 반환하는 기능을 하는 연산자
// 자바스크립트는 변수를 선언하면서, 숫자로 초기화를 하더라도, 다른 타입의 값을 넣을 수 있다. 
// 현재 변수의 타입이 궁금하면, typeof 연산자를 사용을 하면 된다. 
var7 = 10;
var7 = "이런식으로 사용을 하면 Type이 나온다. " 
var7 = true

let t1=typeof var7
// console.log(t1);


// 3. 삼항 연산자, 항을 3개를 사용을 해서 그렇다. 
// 조건식을 이용해서 참, 거짓일 때 값을 다르게 반환을 한다. 
let var8 = 10;

// 요구사항 : 변수 res에  변수의 값이 짝수이면, "짝", 홀수이면 "홀"
let res = var8 % 2 ===0 ? "짝수" :"홀수"
console.log(res);
