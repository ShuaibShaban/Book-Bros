import {React, useState, useEffect} from "react";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import './style/addbook.css'


export default function AddBook({setBooks, books}) {
    let takebooks = useNavigate();
    let [newBook, setNewBook] = useState({
      title: "",
      author: "",
      description: "",
      cover_image: "",
      genre_id: [1]
    });
  
    let [genres, setGenre] = useState([]);
  
    useEffect(() =>{
      fetch('https://bookie-vdkb.onrender.com/genres', {
        method: 'GET',
        credentials: "include"
      })
        .then((resp) => resp.json())
        .then((data) => setGenre(data))
    },
      []
    );
  
    let genresOption = genres.map((genre) => (
      <option key={genre.id} value={genre.id}>
        {genre.name}
      </option>
    ));
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("https://bookie-vdkb.onrender.com/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
            title: newBook.title, author: newBook.author, description: newBook.description, cover_image: newBook.cover_image, genre_id: [+(newBook.genre_id[0])]}),
      })
      .then(resp => resp.json())
      .then(dataz => {
        console.log(dataz)
        setNewBook({ title: "", author: "", description: "", cover_image: "", genre_id: [1] })
        // fetch('http://localhost:3000/books').then(response => response.json()).then(data => {
        //     setBooks(data)
            takebooks('/books')
        // })
        
        }
      )
    }
  
    return (
      <div className="homediv">
        <Navbar />
        <h1>Add-book</h1>
  
        <Container className="w-50">
          <h2 className="header text-center p-3 titler">Add a New Book</h2>
          <Form onSubmit={(e) => handleSubmit(e)} className="mx-auto add-form">
            <Form.Group className="mb-3 theform" controlId="title">
              <Form.Label className="labels">Book Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newBook.title}
                onChange={(e) =>
                  setNewBook({ ...newBook, title: e.target.value })
                }
                placeholder="Title"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 theform" controlId="genre">
              <Form.Label className="labels">Genre</Form.Label>
              <select name="genre" onChange={(e) => setNewBook({ ...newBook, genre_id: [e.target.value] }) } value={newBook.genre_id[0]}>{genresOption}</select>
            </Form.Group>
            <Form.Group className="mb-3 theform" controlId="author">
              <Form.Label className="labels">Author Name</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={newBook.author}
                onChange={(e) =>
                  setNewBook({ ...newBook, author: e.target.value })
                }
                placeholder="Author"
                required
              />
            </Form.Group>
            <Form.Group controlId="description" className="theform">
              <Form.Label className="labels">Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={newBook.description}
                minLength="20"
                placeholder="Description"
                onChange={(e) =>
                  setNewBook({ ...newBook, description: e.target.value })
                }
                style={{ height: "70px", width: '500px' }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 theform" controlId="image_url">
              <Form.Label className="labels">Cover Image URL</Form.Label>
              <Form.Control
                type="text"
                name="cover_image"
                placeholder="URL"
                value={newBook.cover_image}
                onChange={(e) =>
                  setNewBook({ ...newBook, cover_image: e.target.value })
                }
                required
              />
            </Form.Group>
            <div className="d-grid gap-2 col-6 mx-auto">
              <Button variant="secondary" type="submit" className="m-auto shadow create-btn">
                CREATE
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
