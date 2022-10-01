import { useState } from "react";
import "../styles/App.css";

export default function App() {
  const [count, setCount] = useState(1);

  const logic = () => {
    if (count % 15 === 0) {
      return "fizzbuzz";
    } else if (count % 5 === 0) {
      return "buzz";
    } else if (count % 3 === 0) {
      return "fizz";
    }
    else {
      return "normal";
    }
  };
  return (
    <div className="App">
      <button
        id="increment"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h1 className={
        logic()
      } >{count}</h1>
      <button
        id="decrement"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
