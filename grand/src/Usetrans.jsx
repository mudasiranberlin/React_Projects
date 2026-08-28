import React, { useState } from 'react'

function Usetrans() {
    const [pending,setpending]=useState(false)

    const handle = async()=>{
        setpending(true)
        await new Promise(res=>setTimeout(res,2000))
        setpending(false)
        
    }
  return (
    <>
    <h1>Use transition hooks</h1>
    <button disabled={pending} onClick={handle} >Click me</button>
    </>
  )
}

export default Usetrans