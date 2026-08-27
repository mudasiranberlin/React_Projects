import React, { useState } from 'react'

function Form() {
    const [count, setCount] = useState(0)

  const headerstyle={
    color:"red",
    backgroundColor:"green",
    height:"200px"

  }

  const handle=(e)=>{
      e.preventDefault(); 
      console.log(e.target.value);
      
  }

  const [name,setname]=useState("")
  const [Password,setPassword]=useState("")
  const [username,setusername]=useState("")
  const [email,setemail]=useState("")

  // console.log(name);
  // console.log(Password);
  // console.log(username);
  // console.log(email);
  

  
  return (
    <>
    <h1 style={headerstyle}>Mudasir Aziz</h1>

    <form className='forms'>

      <label htmlFor="">Enter Your Name: </label>
      <input type="text" value={name} placeholder='Enter Your Name: 'onChange={((e)=>{
        setname(e.target.value)
      })}/>
      <br />
      <br />
      <label htmlFor="">Enter Your Username: </label>
       <input type="text" placeholder='Enter Username' onChange={((e)=>{
        setusername(e.target.value)
      })} />

      <h1>{email}</h1>
      <br />
      <br />
      <label htmlFor="">Enter Your Email: </label>
       <input type="text" placeholder='Enter Email' onChange={((e)=>{
        setemail(e.target.value)
      })} />
      <br />
      <br />
      <label htmlFor="">Enter Your Password: </label>
       <input type="text" placeholder='Enter Password' onChange={((e)=>{
        setPassword(e.target.value)
      })} />
      <br />
      <button onClick={handle} >Submit</button>

      <button onChange={()=>{
        setemail('')
        setPassword('')
        setname('')
        setusername('')
      }}>Clear</button>


      <h2>{username}</h2>
      <h2>{Password}</h2>
      <h2>{email}</h2>
      <h2>{name}</h2>

    </form>
      
    </>
  )
}

export default Form