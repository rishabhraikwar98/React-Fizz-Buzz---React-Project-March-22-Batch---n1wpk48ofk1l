import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
const[count,setCount]=useState(1)

    const IncrementHandler=()=>{
          setCount(count+1)
    }

    const DecrementHandler=()=>{
            setCount(count-1)
    }
  
  return (
    <div id="main">
     <div className= {(count % 5 == 0 && count % 3 == 0) ? 'fizzbuzz' : (count % 3 == 0) ? 'fizz' : (count % 5 == 0 ) ? 'buzz' : 'normal'}  id='counter'>{count}</div>
        <button id='increment' onClick={IncrementHandler}>Increments</button>
        <button id='decrement' onClick={DecrementHandler}>Decrements</button>
    </div>
  )
}


export default App;
