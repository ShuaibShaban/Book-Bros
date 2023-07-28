import React from "react";
import { Navigate } from 'react-router-dom';

const Protect = ({ isCurrentlyLoggedIn, children }) => {
    // setTimeout(() => {
        if (isCurrentlyLoggedIn) {
            // console.log("hey good", isCurrentlyLoggedIn)
            return children;
          } else {
            // return children;
            // console.log("hey bad", isCurrentlyLoggedIn)
            return <Navigate to="/"  />;
          }
    // }, 5000)

};

export default Protect;