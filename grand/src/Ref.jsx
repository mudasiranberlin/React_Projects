import React, { useRef } from 'react'

function Ref() {
    const  inputref = useRef(null)

    const inputhandler = ()=>{
        inputref.current.focus()
        inputref.current.style.color='red'
        inputref.current.placeholder='Enter full name'
        console.log(inputref);
        

    }
    
  return (
    <>
    <h1>Use Ref</h1>
    <input type="text"   placeholder='Enter your Nmae'  ref={inputref} />
    <button onClick={inputhandler}>focus</button>
    
    </>
  )
}

export default Ref