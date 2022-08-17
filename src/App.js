import React,{useState}from 'react'

function App() {
  let[counter,changeCounter]=useState(1)
  window.changeCounter=changeCounter
  const handleClick=()=>{
    changeCounter(counter + 1)
  }
let name="David"
  return(
    <div>
      <h1>{name}</h1>
      <button onClick={handleClick}>+</button>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  )
  }
export default App;
