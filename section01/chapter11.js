// 함수 선언,

/* function greeting() {
    console.log("안녕하세요.");
}

console.log("호출전 코드 : ");

greeting()
// 이렇게 함수를 호출을 해야지 함수 코드에 있는 로그가 나오고, () 소괄호를 함께 호출을 해야한다. 
// 함수를 호출을 하면, 함수 내부로 프로그래밍 순서가 넘어간다. 

console.log("호출후 : "); */

function getArea(width, height) {
  // 여기를 매개변수라고 한다.
  let area = width * height;
  console.log("얘는 실행이 된다. ");

  return area; // 반환값이라고 하고, 반환값은 함수의 결과값이다.
  // 함수가 return 문을 만나게 되면 바로 종료가 되서 return 아래에 있는 코드는 실행이 되지 않는다.
  console.log("실행이 안된다. ");
  
}

let area1 = getArea(10,20);
console.log(area1);

let area2 = getArea(11,21)
console.log(area2);
