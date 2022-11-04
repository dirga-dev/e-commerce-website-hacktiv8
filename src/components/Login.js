import React from "react";
import '../App.css';
import { useState } from "react";
import axios from "axios";

const Login = ({token, setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = () => {
    setToken("");
    setUsername("");
    setPassword("");

    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: username,
        password: password
      }
    }).then(res=> {
      setToken(res.data.token);
      localStorage.setItem("userToken", res.data.token);
    }).catch(err=> {
      setError(err.response.data);
    })
  }

  return (
    <div className="login">
      <div className="login-input">
        <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        {error && <small>{error}</small> }
        <button className="login-btn" onClick={loginHandler}>Login</button>
        <p>username: mor_2314 password: 83r5^_</p>
      </div>
    </div>
  );
}

export default Login;