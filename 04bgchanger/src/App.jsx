import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [Color ,setColor]= useState("Olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:Color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='felx flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl' >
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full  text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full  text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full  text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("cyan")} className='outline-none px-4 py-1 rounded-full  text-black shadow-lg' style={{backgroundColor:"cyan"}}>Cyan</button>
          <button onClick={()=>setColor("Purple")} className='outline-none px-4 py-1 rounded-full  text-white shadow-lg' style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={()=>setColor("maroon")} className='outline-none px-4 py-1 rounded-full  text-white shadow-lg' style={{backgroundColor:"maroon"}}>Maroon</button>
          <button onClick={()=>setColor("pink")} className='outline-none px-4 py-1 rounded-full  text-black shadow-lg' style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full  text-white shadow-lg' style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=>setColor("white")} className='outline-none px-4 py-1 rounded-full  text-black shadow-lg' style={{backgroundColor:"white"}}>White</button>
          <button onClick={()=>setColor("lavender")} className='outline-none px-4 py-1 rounded-full  text-black shadow-lg' style={{backgroundColor:"lavender"}}>Lavender</button>
        </div>
      </div>
    </div>
  )
}

export default App
