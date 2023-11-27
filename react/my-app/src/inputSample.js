import React from "react";
import { useState } from "react";

const Test = () => {
  const [input, setInput] = useState({
    // 상태와 상태 관리 함수
    name: "",
    nickName: "",
  });
  const { name, nickName } = input; // 비구조화 할당 (디스트럭처링)

  const onchange = (e) => {
    // e에는 뭐가 올까
    console.log(e);
    const { value, name } = e.target; // e,target에는 뭐가 들었을까
    setInput({
      ...input, // 스프레드 문법
      [name]: value, // 객체의 키값으로 변수를 사용하는 방법
    });
  };
  const onclick = () => {
    setInput({
      name: "",
      nickName: "",
    });
  };
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onchange} value={name} />
      <input
        name="nickName"
        placeholder="닉네임"
        onChange={onchange}
        value={nickName}
      />
      <button onClick={onclick}>초기화</button>
      <div>
        <b>값 : </b>
        {name}({nickName})
      </div>
    </div>
  );
};

export default Test;
