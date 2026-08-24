import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Component/Home'
import Header from './Component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      
    </>
  )
}

export default App
