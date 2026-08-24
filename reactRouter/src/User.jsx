import React from 'react'
import { use } from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div style={{backgroundColor:'green', width:'100%', height:'100px', textAlign:'center', color:'white', font:'50px'}}>User:{id}</div>
  )
}

export default User