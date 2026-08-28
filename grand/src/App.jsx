import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Form from './Form'
import Skills from './Skills'
import Check from './Check'
import Loop from './Loop'
import Ref from './Ref'
import Functionpass from './Functionpass'
import UseFOrm from './UseFOrm'
import Usetrans from './Usetrans'

function App() {
  
  const handle= (name)=>{
        console.log(name);
        
        alert(`hello and welcome to ${name}`)
    }

  return (
    <>
   {/* <h3>Welcome back </h3>
    {<Form/>}
    <h1>Hello and welcome</h1>
    <Skills/>
    <Check/>
    <Loop/>
    <Ref/>

    <Functionpass handle={handle}name="mudi"/>
    <UseFOrm/> */}

    <Usetrans/>

    </>
  )
}

export default App
