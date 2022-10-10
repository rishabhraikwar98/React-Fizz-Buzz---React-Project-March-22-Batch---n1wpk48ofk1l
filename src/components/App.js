import { useState } from "react";
import "../styles/App.css";

export default function App() {
  const [count, setCount] = useState(1);

 
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
      <div id="counter" className = {count % 5 === 0 && count % 3 === 0 ? 'fizzbuzz' : (count % 3 === 0) ? 'fizz' : (count % 5 === 0 ) ? 'buzz' : 'normal'}>{count}</div>
      <button
        id="decrement"
        onClick={() => {
          if(count!==1){
          setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>
    </div>
  );
}
