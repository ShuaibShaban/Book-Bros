import {React, useState, useEffect} from "react";
import Navbar from "../navbar/Navbar";
// import Modal from "react-modal";
import { Row, Col } from 'react-bootstrap';
import BookItem from "./BookItem";
// import BookReview from "./BookReview";
import './style/books.css';

// setBooks, books
export default function Books() {

    const [books, setBooks] = useState([]);
    useEffect(() => {
      fetch('https://bookie-vdkb.onrender.com/books', {
        method: 'GET',
        credentials: "include"
      })
        .then(response => response.json())
        .then(data => setBooks(data))
    }, []);
  
    /**Convert each book to a list item (component) */
    const element = books.map((book) => {
      return <Col key={book.id} className="d-flex">
        <BookItem key={book.id} id={book.id} author={book.author} cover_image={book.cover_image} />
      </Col>
    })
  
  
    return (
      <div className="homediv">
        <Navbar />
        <h1 style={{marginLeft: "19px"}}>Books</h1>
        <h4 className="book-instr">CLick book to see details, reviews and add review</h4>
  
        <div>
          <Row xs={1} md={2} lg={4} xl={6} className='g-8 allbooks'>
            {element}
          </Row>
        </div>
      </div>
    );
  }
  