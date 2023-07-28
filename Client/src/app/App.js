import {React, useEffect, useState} from 'react';
import Login from '../components/Authenticate/Login';
import Signup from '../components/Authenticate/Signup';
import Home from '../components/Main/Home';
import Books from '../components/Main/Books'
import Book from '../components/Main/Book'
import AddBook from '../components/Main/AddBook';
import Profile from '../components/Main/Profile'
import ReviewUpdate from '../components/Main/ReviewUpdate';
import UpdateBook from '../components/Main/UpdateBooks';
import ForgotPassword from '../components/Authenticate/ForgotPassword';

import Protect from '../components/Authenticate/Protect'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  let [isCurrentlyLoggedIn, setIsCurrentlyLoggedIn] = useState(false)
  let [idCurrentUser, setIdCurrentUser] = useState(null)

  useEffect(() => {
    fetch('https://bookie-vdkb.onrender.com/users/checklogin', {
      method: 'GET',
      credentials: "include"
    }).then((response) => {

      if(response.ok){
        response.json().then(data => {
          setIsCurrentlyLoggedIn(true)
          setIdCurrentUser(data.id)
          console.log( localStorage.getItem('token') )
        })
        
      }else{

      } 
    })
  }, [])


  return (
    <BrowserRouter>
    <div>
    <Routes>
        <Route path = "/" element = {<Login setIsCurrentlyLoggedIn={setIsCurrentlyLoggedIn} setIdCurrentUser={setIdCurrentUser} />}/>
        
        <Route path='/signup' element={ <Signup /> } />

        <Route path='/updatepassword' element={ <ForgotPassword /> } />


        <Route path="/home" element={
          <Protect  isCurrentlyLoggedIn={isCurrentlyLoggedIn}>
            <Home />
          </Protect>
        } />

        <Route path="/addbook" element={
          <Protect  isCurrentlyLoggedIn={isCurrentlyLoggedIn}>        
            <AddBook />
          </Protect>
        } />

        <Route path="/books" element={
          <Protect  isCurrentlyLoggedIn={isCurrentlyLoggedIn}>        
            <Books />
          </Protect>
        } />

        <Route path="/profile" element={
          <Protect  isCurrentlyLoggedIn={isCurrentlyLoggedIn}>        
            <Profile setIsCurrentlyLoggedIn={setIsCurrentlyLoggedIn} setIdCurrentUser={setIdCurrentUser} />
          </Protect>
        } />

        <Route path="/books/:id" element={
          <Protect  isCurrentlyLoggedIn={isCurrentlyLoggedIn}>        
            <Book idCurrentUser={idCurrentUser}/>
          </Protect>
        }/>

        <Route path="/books/:bookid/reviews/:reviewid/update"  element={
          <Protect  isCurrentlyLoggedIn={isCurrentlyLoggedIn}>        
            < ReviewUpdate />
          </Protect>
        } />
        
        <Route path="/books/:id/update" element={
          <Protect  isCurrentlyLoggedIn={isCurrentlyLoggedIn}>        
            <UpdateBook />
          </Protect>
        } />


    </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
