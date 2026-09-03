import React from 'react'
import Header from '../Component/Header'
import LogoNot from "../assets/images/404 Error-amico.png";

function Empty() {
  return (
    <>
    <Header/>
    <img src={LogoNot} alt="Hello" style={{height:'1024px'}} />
    </>
  )
}

export default Empty