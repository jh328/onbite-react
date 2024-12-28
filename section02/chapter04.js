// 1. 스프레드 연산자. 흩뿌리다, 펼치다 라는 뜻
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할을 한다.

let arrA = [1, 2, 3];
let arrB = [4, 5, 6];

// 내가 원하는거는 4, 1, 2, 3, 5, 6, -> 이런식으로 귀찮게 해야 한다.
let arrB1 = [4, arrA[0], arrA[1], arrA[2], 5, 6];
// console.log("요구사항 로직 : ", arrB1);

// arrB1 처럼 해도 되지만, 이렇게 하면 위험하다.
// 배열이라고 하는거는 원래 중간에 값을 변경할려고 사용을 하는건데,
// 갑자기 중간에 숫자가 추가,삭제,수정이 되면 코드를 계속 변경을 해야 하기 때문에 그렇다.
// 이렇게 인덱스를 펼쳐 놓으면 안좋다. 그래서 스프레드 연산자 사용해야한다.

// ... 이게 스프레드 연산자이다. ...arrA 라고 하면
// 배열에 모든 요소를 펼쳐 놓으라는 뜻이 된다.

let arrB2 = [4, ...arrA, 5, 6];
// console.log("spread : ", arrB2);

// spread 연산자는 객체에서도 사용이 가능하다.

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

// console.log(obj2);

// 함수 호출 스프레드

function fundA(a, b, c) {
  console.log(a, b, c);
  return;
}

fundA(...arrA);



// 2. Rest 매개변수
// 우리말로 나머지, 나머지 매개변수라고 한다.

function funB(one,two,...rest){
    console.log(one,two,rest)
}

funB(...arrA)
// rest 매개변수 뒤에는 아무것도 못오고, rest가 마지막에 나와야한다. 변수여서 아무거나 이름을 사용해도 되고 ...만 와야한다.