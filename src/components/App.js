import { useState } from "react";
import "../styles/App.css";

export default function App() {
  const [count, setCount] = useState(1);
  const Inc = ()=>{
    setCount(count+1)
  }
  const Dec = ()=>{
      if(count>1){
      setCount(count-1)
    }
    
  }
  
 
  return (
    <>
    <button id="increment" onClick ={Inc}>Inecrement</button>
    <div id= "counter"className= {count % 5 === 0 && count % 3 === 0 ? 'fizzbuzz' : (count % 5 === 0) ? 'buzz' : (count % 3 === 0 ) ? 'fizz' : 'normal'}>{count}</div>
    <button id="decrement" onClick ={Dec}>Decrement</button>
    </>
  );
}
