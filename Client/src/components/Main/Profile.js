
import {React, useState} from "react";
import {useNavigate} from 'react-router-dom'
import Navbar from "../navbar/Navbar";
import './style/profile.css';


export default function Profile({setIsCurrentlyLoggedIn, setIdCurrentUser}) {
    let takeaway = useNavigate()
    const [newPass, setNewPass] = useState({password: ""})
        // console.log("Logged out")

        function Logout(){
            fetch('https://bookie-vdkb.onrender.com/users/logout',{
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                credentials: "include" 
            })
            .then(resp => resp.json())
            .then((data) => {
                // console.log(data)
                setIsCurrentlyLoggedIn(false)
                setIdCurrentUser(null)
                takeaway('/')
            })
        }

        function handleupdate(e){
            e.preventDefault()
            fetch('https://bookie-vdkb.onrender.com/users/update-password', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: "include",
                body: JSON.stringify({password: newPass.password})
            })
            .then((resp) => {
                setNewPass({password: ""})
                alert("updated successfully")
            })
        }
        

    return (
        <div className="homediv">
            <Navbar />
            <button onClick={() => Logout()}className="logout-btn">logout</button>
            <h1>Profile</h1>
            <div className="update">
            <h2>Update Password:</h2>
            <form onSubmit={(e) => handleupdate(e)}>
                <input type="password" required minLength="6" value={newPass.password} onChange={(e) => setNewPass({password: e.target.value})} />
                <input type="submit" value="Update"/>
            </form>
        </div>
        


        </div>
    )
}
