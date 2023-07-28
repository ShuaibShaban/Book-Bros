import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  // const [showPassword, setShowPassword] = useState(false);
  const [userSignUp, setUserSignUp] = useState({
    username: "",
    password: "",
    email: "",
    profile_image: ""
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  let takeLogIn = useNavigate()

  const handleSubmit =  (event) => {
    event.preventDefault();
    if(userSignUp.password === confirmPassword){
      fetch("https://bookie-vdkb.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userSignUp),
      })
      .then(() => { 

        takeLogIn('/')
          setUserSignUp({
            username: "",
            password: "",
            email: "",
            profile_image: ""
          })
          setConfirmPassword("")
    })

    }else{

      setUserSignUp({
        username: "",
        password: "",
        email: "",
        profile_image: ""
      })
      setConfirmPassword("")
      setError("Please enter matching passwords")
    }

   };


  return (
    <div className="signup-page">
    <div className="signup-card signup-top">
      <h1>Signup-page</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="txt_field">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            placeholder="Username"
            value={userSignUp.username}
            onChange={(e) => setUserSignUp({...userSignUp, username: e.target.value})}
            required
            minLength="6"
          />
        </div>
        <div className="txt_field">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            placeholder="Email-address"
            value={userSignUp.email}
            onChange={(e) => setUserSignUp({...userSignUp, email: e.target.value})}
            required
          />
        </div>
        <div className="txt_field">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            placeholder="Password"
            value={userSignUp.password}
            onChange={(e) => setUserSignUp({...userSignUp, password: e.target.value})}
            required
            minLength="6"
          />
        </div>
        <div className="txt_field">
          <label htmlFor="confirm-password">Confirm-Password: </label>
          <input
            type="password"
            placeholder="Confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength="6"
          />
        </div>

        <div className="txt_field">
          <label htmlFor="profile">Profile Picture URL: </label>
          <input
            type="text"
            placeholder="profile"
            value={userSignUp.profile_image}
            onChange={(e) => setUserSignUp({...userSignUp, profile_image: e.target.value})}
          />
        </div>

        <div className="buttons">
        <button type="submit">Signup</button>
          <button onClick={() => takeLogIn('/')}>Go-To-Login</button>
        </div>
      </form>
    </div>
    </div>
  );
}
