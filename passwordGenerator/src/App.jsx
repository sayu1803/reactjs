import { useState , useCallback } from 'react'

import './App.css'

function App() {
  const[length,setLength]=useState(8)
  const[num,setNum]=useState(false)
  const[specialChar,useSpecialChar]=useState(false)
  const[password,setPassword]=useState("")

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str+="0123456789"
    if(specialChar) str+="!@#$%^&*()`~{}[]:"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass=str.charAt(char)
      
    }
    setPassword(pass)

  },[length,num,specialChar,password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'> <h1 className=' text-center text-white my-3'>Password Generator</h1>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
           />
        </div>
      
      </div>
    </>
  )
}

export default App
