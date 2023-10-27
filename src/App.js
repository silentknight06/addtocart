import React, { useState } from 'react'
import Navbar from './components/Navbar'
function App() {
  const[input, setinput] = useState("deepak");
  let dk = (e) =>{
    const value = e.target.value;
    setinput(value);
  }
  return (
    // <div>
    //   <Navbar  name = "deepak" />
    //   <Navbar  name = "suraj"/>
    //   <Navbar name = "sahil" />
    // </div>
  )
}

export default App
