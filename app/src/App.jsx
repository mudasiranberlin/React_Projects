import React from 'react'
import User from './User'
import College from './College'

function App() {

  // const email="apple.mudasir@gmail.com"
  // const name="Mudasir Ahmad"
  // const age=67

  const myobj={
    name:"Mudasir",
    email:"apple.mudasir@gmail.com",
    age:"45"
  }

  let name=["Google","Microsoft","Apple"]
  return (
    <>
    <h1>Welcome Mudasir</h1>
    <User user={myobj}/>
     <User user={myobj}/>
      <User user={myobj}/>
      <College user={name} />
    </>
  )
}

export default App