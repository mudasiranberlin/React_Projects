import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const headerstyle={
    color:"red",
    backgroundColor:"green",
    height:"100px"

  }

  return (
    <>
    <h1 style={headerstyle}>Mudasir Aziz</h1>

    <h2 className='header'>Mudasir is Good</h2>
      
    </>
  )
}

export default App
