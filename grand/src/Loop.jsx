import React from 'react'

function Loop() {
    const name=["Mudi","Aziz","Google","Maruti"]

    const data=[
        {
            name:"Mudasir",
            email:"mudasir@gmail.com"
        },
        {
            name:"Muzamil",
            email:"muzamil@gmail.com"
        },
        {
            name:"aabid",
            email:"aabid@gmail.com"
        }
    ]

    
  return (
    <>
    <h1>Mudasir</h1>
    {
        name.map((item)=>(
            <h2>{item}</h2>
        
        ))
    }
    <hr />
    {
        data.map((item)=>(
            <h2>{item.name}: { item.email }</h2>
        
        ))
    }

    </>
  )
}

export default Loop