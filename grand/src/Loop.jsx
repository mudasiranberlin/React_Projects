import React, { useEffect, useState } from 'react'

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

    const name1 = new Date();
        // setdate(name1.toLocaleTimeString())
    console.log(name1.toLocaleTimeString());
    
    

    let [date,setdate]=useState('')
    useEffect(()=>{ 
        setInterval(()=>{
            
            const name1 = new Date();
         setdate(name1.toLocaleTimeString())
    console.log(name1.toLocaleTimeString());
        },1000)
    },[])

    
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
            <h2 key={item}>{item.name}: { item.email }</h2>
        
        ))
    }


    <h1>Date: {date}</h1>


    </>
  )
}

export default Loop