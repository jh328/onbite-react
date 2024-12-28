// 1. 구조 분해 할당

let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
const person = {
  name: "송준한",
  age: 960328,
  job: "무직",
};

// let { name, age, job ,extra ='hello'} = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법 5분 50초
const func = ({ name, age, job }) => {
  console.log(name, age, job);
};

func(person);
// 객체를 넘길 때 사용하는거다. 


const pSon = {
    name : "송준한",
    details:{
        age: 960328,
        address: "동작구 여의대방로"
    }
}

// 일반 접근을 이렇게 해서, 값을 할당을 하는건가? 
//const age = pSon.details.age
console.log(age) // 값을 할당을 하는게 아니라, 객체에 값을 확인 하는거 아니야? \

// 구조 분해 할당
const {details:{age,address}} = pSon;
console.log(age,address)