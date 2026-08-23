import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("red")

  function change(col) {
    setCount(col)
  }

  return (
    <div style={{
      backgroundColor:count
    }} id='mudi'>

     <div style={{color:'greenyellow', height:'250px', textAlign:'center'}}>
      <button onClick={()=>{change("green")}} >Green</button>
      <button onClick={()=>{change("red")}} >red</button>
      <button onClick={()=>{change("blue")}}>blue</button>
      <button onClick={()=>{change("white")}}>white</button>
     </div>
    </div>
  )
}

export default App
