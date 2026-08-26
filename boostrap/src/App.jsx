import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Listgroup from './Component/Listgroup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome </h1>
      <Listgroup/>
    </>
  )
}

export default App
