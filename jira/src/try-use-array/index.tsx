import React from "react";
import { useMount, useArray } from "utils/index";
export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: "Jack", age: 25 },
    { name: "Rose", age: 18 },
  ];

  const { value, clear, removeIndex, add } = useArray(persons);

  useMount(() => {
    // test 泛型报错
    // console.log(value.notExits);
    // add({name:'david'});
    // removeIndex("123");
  });

  return (
    <div>
      {/* 期待点击之后增加john */}
      <button onClick={() => add({ name: "john", age: 22 })}>add john</button>
      <button onClick={() => removeIndex(0)}>删除</button>
      <button style={{ marginBottom: "50px" }} onClick={() => clear()}>
        清空
      </button>
      {value.map((persion: { name: string; age: number }, index: number) => {
        return (
          <div style={{ marginBottom: "30px" }}>
            <span style={{ color: "red", marginRight: "50px" }}>{index}</span>
            <span style={{ marginRight: "50px" }}>{persion.name}</span>
            <span style={{ marginRight: "50px" }}>{persion.age}</span>
          </div>
        );
      })}
    </div>
  );
};
