import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-950'>

    Hello world!
  </h1>
  <Card  name="shoe" title="welcome to mudasir shop" />
  <Card name="shoe" title="welcome to mudasir shop" />
    </>
  )
}

export default App
