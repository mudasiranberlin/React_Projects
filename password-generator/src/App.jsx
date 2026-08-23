import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [length, setlength] = useState(8)
  const [char, setchar] = useState(true)
  const [num, setnum] = useState(true)
  const [password, setpassword] = useState("")

  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass = ""

    let str =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (num) {
      str += "0123456789"
    }

    if (char) {
      str += "!@#$%^&*()_+-=[]{}|;':,/<>?~"
    }

    for (let i = 0; i < length; i++) {

      let charr = Math.floor(Math.random() * str.length)

      pass += str.charAt(charr)
    }

    setpassword(pass)

  }, [length, char, num])


  const passwordclipboard = useCallback(() => {

     passwordref.current?.select()
    //passwordref.current?.setSelectionRange(0, 3)

    window.navigator.clipboard.writeText(password)

  }, [password])


  useEffect(() => {

    passwordGenerator()

  }, [passwordGenerator])


  return (
    <>

      <div className="password-container">

        <h1>Generator</h1>

        <div className="password-box">

          <input
            type="text"
            value={password}
            readOnly
            ref={passwordref}
          />

          <button
            type="button"
            onClick={passwordclipboard}
          >
            Copy
          </button>

        </div>


        <div className="options">

          <label>
            Password Length: {length}

            <input
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => {
                setlength(Number(e.target.value))
              }}
            />
          </label>


          <label>
            Include Numbers

            <input
              type="checkbox"
              checked={num}
              onChange={() => setnum((prev) => !prev)}
            />
          </label>


          <label>
            Include Special Characters

            <input
              type="checkbox"
              checked={char}
              onChange={() => setchar((prev) => !prev)}
            />
          </label>

        </div>


        <button
          type="button"
          className="generate-btn"
          onClick={passwordGenerator}
        >
          Generate Password
        </button>

      </div>

    </>
  )
}

export default App