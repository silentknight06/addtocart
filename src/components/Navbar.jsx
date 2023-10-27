import React from 'react'

function Navbar(props) {
  return (
    <div>
          <h1> hey this is first membet name is {props.name}</h1>
          <h2> hey this is your second member and name is {props.name}</h2>
    </div>
  )
}

export default Navbar
