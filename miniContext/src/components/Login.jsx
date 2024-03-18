import React ,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username,setUsername]=useState('')
    const [passwowd, setPassword] = useState('')

    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,passwowd})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text "
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'/>
        {"  "}
        <input type="text " 
        value={passwowd}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login