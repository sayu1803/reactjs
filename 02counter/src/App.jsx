import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter =5

  const addValue=()=>{
    counter+=1

  }


  return (
    <>
      <h1>CHaiiiii aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button>Remove value</button>
    </>
  )
}

export default App
