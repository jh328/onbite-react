// 1. 대입연산자
let var1 = 1;
// = 이퀄이 대입 연산자이다. 

// 2. 산술 연산자 
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10;
// console.log("연산순위 확인 하는 log : ",num6);

// 3. 복합 대입 연산자, 산술 연산자랑, 대입 연산자가 복합 되어 있다고 생각을 하기
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;
// console.log(num7);

// 4. 증감 연산자 값을 1씩 늘리거나 줄이는거, 
let num8 = 10;
num8++;
// console.log(num8);


// 5. 논리 연산자
let or = true || false; // 하나만 참이면 참이 된다. 
let and = true && false; // 두개의 값이 참이어야지 참이 된다. 
let not = !true; // 참이면 거짓, 거짓이면 참 

// 6. 비교 연산자
let comp1 = 1 ===2;
let comp2 = 1 !==2;
// console.log(comp1,comp2);

let comp3 = 2>1;
let comp4 = 2<1;
// console.log(comp3,comp4);

let comp5= 2>=2;
let comp6 = 2<=2;
console.log(comp5,comp6);

