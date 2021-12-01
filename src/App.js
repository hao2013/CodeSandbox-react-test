import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(10000);

  return (
    <div className="App">
      <h2>hello!!</h2>
      <p>{count}</p>
    </div>
  );
}
