let obj1 = new Object(); // 객체 생성자 라고 한다.

console.log("오브젝트 1 객체 생성자라고 부른다.: ", obj1);

let obj2 = {}; // 객체 리터럴 (많이 사용)

console.log("오브젝트 2 객체 리터럴이라고 부른다.: ", obj2);

// 키는 왼쪽, 밸류 값은 오른쪽이다. / 이런걸 객체 프로퍼티라고 한다. (객체 속성)

let person = {
  name: "송준한",
  age: 960328,
  job: "Fronted Develpoer",
  extra: {},
  10: 20,
  "like cat ": true,
};

console.log("person 객체 확인하는 로직 : ", person);

// 객체 프로퍼티 다루는 방법
// 3. 1 특정 프로퍼티에 접근하는 법 (1.점 표기법, 2. 괄호 표기법 이 두가지 방식이 있다. )
// 1. 괄호 표기법
let name = person.name;
console.log("프로퍼티 확인하는 방법 점 표기법 : ", name);

// 2. 괄호 표기법
let age = person["age"]; // 프로퍼티 키를 문자열로 출력을 해야한다.
console.log("프로퍼티 확인하는 괄호 표기법 : ", age);

let property = "job";
let job = person[property];
console.log("프로퍼티를 문자열로 출력을 하면 이런것도 할 수 있다. : ", job);

// 3.2 새로운 프로퍼티를 추가하는 방법은
// 점 표기법, 괄호 표기법처럼 똑같이 해주면 된다.
person.job = "프론트엔드 개발자";
person["favoriteFood"] = ["치킨", "피자", "햄버거"];

console.log("펄슨 객체 확인하는 방법 : ", person);

// 3.3 프로퍼티를 수정하는 방법, 점 표기법, 괄호 표기법으로 사용하면 된다.
person.job = "무직";
person["favoriteFood"] = "초콜릿";

// JS에서는 객체의 점 표기법과 괄호 표기법은 기존 프로퍼티를 수정하거나
// 새로운 프로퍼티를 추가할 때 동일한 방식으로 작동을 한다.
// 이미 존재하는 프로퍼티에 값을 할당하면 덮어쓰기가 발생한다.

// 3.4 프로퍼티를 삭제 하는 방법 <delete> 키워드를 사용하면 된다.
// delete 객체명.프로터피명
// delete 객체명["프로퍼티명"]

delete person.job;
delete person["favoriteFood"];
console.log("삭제 : ", person);

// 3.5 객체의 특정 프로퍼티가 존재하는지 확인하려면 두 가지 주요 방법이 있다.
// 1. <in> 연산자
// 사용방법 : "프로퍼티명" in 객체명;
// 키 값이 반드시 문자열이어야 한다.
// 반드시 console.log() 와 같이 출력하거나, 조건문에 사용해야 결과를 확인할 수 있다. 

console.log("age" in person);
console.log("job" in person);

// 2. <hasOwnProperty()메서드>
// 객체의 특정 프로퍼티가 직접 존재하는 경우에만 <true>를 반환을 한다.
// 프로토타입 체인에 있는 프로퍼티는 무싷나다.
// 사용방법 : 객체명.hasOwnProperty("프로퍼티명");

let home = {
  location: "대방동",
  room: "방 1개, 화장실 1개 원룸",
};

console.log(
  "home 객체를 확인하는 방법 그 중에서 home 프로퍼티 키 ",
  home.hasOwnProperty("location")
);

console.log("bath 확인하는 방법 : ", home.hasOwnProperty("bath"));

