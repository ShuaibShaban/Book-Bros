import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
// import Modal from "react-modal";
import './login.css'

export default function Login({setIsCurrentlyLoggedIn, setIdCurrentUser}) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState("");

  let takeHome = useNavigate();


  // const OpenSignup = () => setShowLogin(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://bookie-vdkb.onrender.com/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: "include",
      body: JSON.stringify(user)
    })
      .then(response => {
        if (response.ok) {
          response.json().then(data => {
            // console.log(data.info)
            setIdCurrentUser(data.info)
            setIsCurrentlyLoggedIn(true)
            takeHome('/home');
            setUser({ username: "", password: "" })
          })
        }
        else {
          response.json().then(data => {
            setError('Invalid username or password');
            setUser({ username: "", password: "" })
          })
        }
      })

    }


  return (
    <div className="login-page">
    <div className="signup-card login-top">
      <h1>Login-page</h1>
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
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="buttons">
        <button type="submit">Login</button>
          <button onClick={() => takeHome('/signup')}>Create-Account</button>
          <br />
          <button onClick={() => takeHome('/updatepassword')}>Forgot Password</button>

        </div>
      </form>
      </div>
      </div>
  );
}

