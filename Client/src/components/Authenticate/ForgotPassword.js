import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import './login.css'

function ForgotPassword(){
    
    
    const [user, setUser] = useState({
        username: "",
        password: ""
      });
      const [error, setError] = useState("");
    
      let takeHome = useNavigate();
        
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://bookie-vdkb.onrender.com/users/forgot-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: "include",
          body: JSON.stringify(user)
        })
          .then(response => {
            if (response.ok) {
              response.json().then(data => {
                // console.log(data.info)
                takeHome('/');
                setUser({ username: "", password: "" })
              })
            }
            else {
              response.json().then(data => {
                setError('Enter existing username');
                setUser({ username: "", password: "" })
              })
            }
          })
    
        }
    
    
    return(



<div className="login-page">
    <div className="signup-card login-top">
      <h1>Forgot-password</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="txt_field">
          <label htmlFor="username">username: </label>
          <input
            type="text"
            placeholder="username"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="txt_field">
          <label htmlFor="password">New-Password: </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            minLength="6"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="buttons">
        <button type="submit">Update</button>
          <button onClick={() => takeHome('/signup')}>Create-Account</button>
          <br />
          <button onClick={() => takeHome('/')}>LogIn-Account</button>

        </div>
      </form>
      </div>
      </div>


        )
}

export default ForgotPassword;