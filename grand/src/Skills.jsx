import React, { useState } from 'react'

function Skills() {

    const [data,setdata] =useState([])
    const handle = (e)=>{
        console.log(e.target.checked);
        if (e.target.checked) {
            setdata([...data,e.target.value])
        }
        else{
           setdata([...data.filter((item)=>{
            return item!=e.target.value
           })])
        }
        console.log(data);
    }
  return (
    <>
    <h2>Checkboc</h2>
    <input type="checkbox" id='php' onChange={handle} value={"Php"} />
    <label htmlFor="php">Php</label>
    <br />
     <input type="checkbox" id='css' onChange={handle} value={"css"}  />
    <label htmlFor="css">CSS</label>
    <br />
     <input type="checkbox" id='java' onChange={handle}  value={"java"}  />
    <label htmlFor="java">java</label>
    <br />
     <input type="checkbox" id='Golang' onChange={handle} value={"golang"}  />
    <label htmlFor="Golang">Golang</label>

    <h1> {data} </h1>


    
    
    </>
  )
}

export default Skills