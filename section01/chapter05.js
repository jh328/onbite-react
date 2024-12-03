// 1. 원시타입은 Nuber Type 숫자
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

/* 
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);  // 나머지 연산은 <모듈러>라고 한다. 
*/

// 연산 실패는 NaN 으로 나온다. 
let nan = NaN;

let inf = Infinity;
let mInf = -Infinity;


// 2. String Type
let myName = "송준한";
let myLocation = "여의도";
let introduce = myName + myLocation;
// console.log(introduce);


// 문자열은 "" , '', `` 백틱도 가능하다. 
// 백틱은 기본적으로 쌍따옴표랑 기능이 같지만, ${} 이렇게 하면, 변수의 값을 동적으로 만들 수 있다. 
// 백틱으로 하면, 변수의 값을 동적으로 문자열 값을 표현할 수 있따. 이런 문법은 템플릿 리터럴 문법이라고 한다. 
// 실무에서도 많이 유용하다. 
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`
// console.log(introduceText);


// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type  (아무것도 없다.)
let empty=null

// 5. Undefined Type
// 변수를 선언하고, 어떠한 값도 넣지 않을 떄 자동으로 할당이 된다. 
let none;
console.log(none);
// 언디파인드랑, 널은 의미는 같지만 좀 다르다.
// 언디파인드는, 변수를 선언하고 아무런 값을 할당 안해도 자동으로 들어간다. 
// 널은 명시적으로 할당을 해야한다. 개발자가 변수의 아무값도 없다고 할 때 사용하는거다. 

