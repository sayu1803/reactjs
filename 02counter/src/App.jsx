import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//learning how to use useState and

function App() {
  //let counter =5

  let [counter,setCounter]=useState(5)

  const addValue=()=>{

    if  (counter <20){
      setCounter(counter+1)
    }else{
      alert("you can not increse the value more than 20")
    }

    //counter=counter+1
    //setCounter(counter+1)

  }
  const revomeValue=()=>{
    if (counter>0){
      setCounter(counter-1)
    }else{
      alert("you can not decreast the value lest than 0")
    }
  }


  return (
    <>
      <h1>CHaiiiii aur React</h1>
      <h2>Counter value: {counter}</h2>
      

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={revomeValue}>Remove value</button>
    </>
  )
}

export default App
