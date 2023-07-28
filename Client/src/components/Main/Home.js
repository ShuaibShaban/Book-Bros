import React from "react";
import Navbar from "../navbar/Navbar";
import './style/home.css'


export default function Home() {


    return (
        <div className="homediv">
            <Navbar />
            <section className="wrapper">
  <div className="top">Books</div>
  <div className="bottom" aria-hidden="true">Books</div>
</section>
        </div>
    )
}
