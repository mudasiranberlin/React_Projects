import React, { useState } from 'react'

function Check() {
  const [gender, setGender] = useState('')

  return (
    <>
      <h2>Select gender</h2>

      <label htmlFor="male">Male</label>
      <input
        type="radio"
        id="male"
        name="gender"
        value="male"
        checked={gender === 'male'}
        onChange={(e) => setGender(e.target.value)}
      />

      <label htmlFor="female">Female</label>
      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        checked={gender === 'female'}
        onChange={(e) => setGender(e.target.value)}
      />

      <h1>{gender}</h1>
    </>
  )
}

export default Check