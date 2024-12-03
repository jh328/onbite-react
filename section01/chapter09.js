// 1. if 조건문
// 이프문이라고도 한다.
// if
let num = 10;
if (num >= 10) {
  // console.log("num은 10 이상입니다.");
  // 조건식이 만족이 되면 여기 이프문 로그가 실행이 된다.
} else if (num >= 5) {
  // console.log("numd은 5이상입니다.");
} else {
  // else (영어로 그렇지 않으면 이라는 뜻이다.)
  // console.log("조건이 거짓입니다.");
}

// 2. swicth
// if문과 기능은 동일하다. 다수의 조건을 처리할 때 이프문보다 직관적이다.
let animal = "cat";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    console.log("그런 동물은 모르겠습니다.");
  }
}
