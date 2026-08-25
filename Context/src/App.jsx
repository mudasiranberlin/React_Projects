import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UsercontextProvider from './UsercontextProvider'
import Login from './Login'
import Profile from './Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UsercontextProvider>
<h1>Welcome to mudasir home</h1>
<Login/>
<Profile/>
    </UsercontextProvider>
     
    </>
  )
}

export default App
