import { useState } from "react";
import "./styles.css";

export default function App() {
  function num() {
    const arr = [...Array(1000).keys()];
    arr.forEach(() => {
      console.log("重たい処理");
    });
    return 100;
  }

  // const [count, setCount] = useState(num())

  //stateの初期値が重たい処理をする先に、アロー関数でレンダリング最適化
  const [count, setCount] = useState(() => num());

  const onClickCount = () => {
    //新しいstateが前のstateに基づいて計算される場合、関数型で書く
    setCount((prevCount) => prevCount + 1);
    setCount((j) => j + 1);
    setCount((i) => i + 1);
  };

  return (
    <div className="App">
      <h2>hello!!</h2>
      <p>{count}</p>
      <button onClick={onClickCount}>クリックしてね</button>
    </div>
  );
}
