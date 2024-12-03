// math 모듈
//
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}
/* 
module.exports = {
    add,
    sub,
}
이 코드가 CommonJS 코드이다.   
*/

// export {add,sub}; // module로 값을 보낼 때 객체를 리터럴로 생성을 해서 보내주면 된다.

export default function multiply(a, b) {
  return a * b;
}
