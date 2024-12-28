/* function main(value) {
  value();
}

function sub(){
    console.log("sub 함수 " )
}

main(sub)
console.log("main 함수 호출 : ", main)
 */

/* function main(value, value1) {
  console.log(value, value1);
}

main("main 함수 호출 하는 값 : ", 1001)
 */

/* function main(value){
    console.log("1", 1)
    console.log("2", 2)
    value() // 메서드가 아니라 함수 호출이다. 
// 이유 value가 함수를 참조하고 있으니 value()는 그 함수 (sub)를 실행하라는 의미이다. 
    console.log("END")
}

function sub(){
    console.log("I am Sub Function ")
}

main(sub) // 이런걸 콜백함수라고 한다. 

// 1 실행 2 실행 3 문자열 실행  4 end */
/* 
function main(value) {
  console.log("1 : ", 1);
  console.log("2 : ", 2);
  value();
  console.log("END");
}

main(() => {
  console.log(" 화살표 함수로 호출");
});

// 20~ 28번 코드랑 / 36~ 46코드는 똑같은 코드이다.

function repeact(count) {
  for (let index = 1; index <= count; index++) {
    console.log("index 값 : ", index);
  }
}

repeact(10);
 */
function repeactDouble(count, callback) {
  for (let index = 1; index <= count; index++) {
    callback(index); // 이해안됨. 
  }
}

repeactDouble(5, function (index) {
    console.log("indxe 확인하는 값 ㅇㅁㄴㅇㄹ" , index)
});
