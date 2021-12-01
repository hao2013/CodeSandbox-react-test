import { useState } from "react";
import "./styles.css";

export default function App() {
  console.log("APP");
  const [count, setCount] = useState(10000);
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
