import React from 'react'

function User({user}) {
  return (
    
    <div>
        <hr />
        <h1>User</h1>
        <h2>Name: {user.name}</h2>
        <h2>Age: {user.age}</h2>
        <h2>Email: {user.email}</h2>
        <hr />

    </div>
  )
}

export default User