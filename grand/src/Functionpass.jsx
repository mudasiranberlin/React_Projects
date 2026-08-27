import React from 'react'

function Functionpass({handle,name}) {

    
  return (
    <>
    <h1>Pass the function as we cannot pass the function</h1>

    <button onClick={
        ()=>{
           handle("mudi")
        }
    }>Click to submit</button>
    </>
  )
}

export default Functionpass