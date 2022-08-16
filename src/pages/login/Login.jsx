import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../firebase"
import "./login.scss";

const Login = () => {
  const [error , setError] = useState(false)
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const {dispatch} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogin=(e)=>{
    e.preventDefault()

    signInWithEmailAndPassword (auth,email,password)
    .then((userCredential)=>{
      const user = userCredential.user
      dispatch({type:"LOGIN", payload:user})
      navigate("/")
      
    }).catch((err)=>{
      setError(true)
    })

  }
  

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="email"
          placeholder="email"
          id="username"
          onChange={(e)=>setEmail(e.target.value)}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={(e)=>setPassword(e.target.value)}
          className="lInput"
        />
        <button  
        onClick={handleLogin}
         className="lButton">
          Login
        </button>
        {error && <span>password or email is wrong </span>}
      </div>
    </div>
  );
};

export default Login;