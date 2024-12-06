import { use } from "react";
import { useState } from "react";
import useInput from "../hooks/useInput";
// 3가지 hook 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출이 가능
// 2. 리액트 훅은 조건부로 호출될 수 없다. 조건문,반복문 훅이 사용이 안된다는거다.
// 설명 5분 25 초 : 우리 리애긑 가 내부적으로 컴포넌트를 호출 하고 화면에 렌더링 할 때 조건문,반복문에서 호출을 할 때 호출 순서가 엉망이 된다.
// 내부적인 오류가 발생을 해서, 리액트 훅은 조건문,반복문 블록이 아닌, 컴포넌트 안에서만 호출을 할 수 있다.

// 6분  3. 가장 중요한 핵심 팁은 : 나만의 훅, 커스텀 훅을 직접 만들 수 있다.
//



const HookEaxm = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};
export default HookEaxm;
