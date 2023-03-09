import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({ setErrors, loginUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      setErrors([])
    }
  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(resp => resp.json())
      .then(data => {
        if(data.errors) {
          setErrors(data.errors);
        } else {
          loginUser(data);
          navigate("/")
        }
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="username">Username: </label>
          <input 
            type="text" 
            name="username" 
            id="username" 
            value={ username }
            onChange={ e => setUsername(e.target.value) }
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={ password }
            onChange={ e => setPassword(e.target.value) }
          />
        </div>

        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login