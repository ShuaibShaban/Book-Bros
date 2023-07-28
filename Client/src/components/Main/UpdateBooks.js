import {React, useState, useEffect} from "react";
import Navbar from "../navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import './style/addbook.css'
function UpdateBook(){

    let takebooks = useNavigate();
    let { id } = useParams()
    let [updatedBook, setUpdatedBook] = useState({
      title: "",
      author: "",
      description: "",
      cover_image: ""
    }); 

    useEffect(() => {
        fetch(`https://bookie-vdkb.onrender.com/books/${id}`,{
            method: 'GET',
            credentials: "include"
        })
        .then(res => res.json()).then((data) => {
            console.log(data)
            setUpdatedBook({ title: data.title, author: data.author, description: data.description, cover_image: data.cover_image})
        })

    }, [id])

    function handleUpdateBook(e){
        e.preventDefault()
        fetch(`https://bookie-vdkb.onrender.com/books/${id}`,{
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify(updatedBook)
        })
        .then(() => takebooks(`/books/${id}`))
    }
  


    return(

        <div className="homediv"> 
        <Navbar />
        <h1>Update-book</h1>
  
        <Container className="w-50">
          <h2 className="header text-center p-3 titler">Update Book</h2>
          <Form onSubmit={handleUpdateBook} className="mx-auto add-form">
            <Form.Group className="mb-3 theform" controlId="title">
              <Form.Label className="labels">Book Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={updatedBook.title}
                onChange={(e) =>
                  setUpdatedBook({ ...updatedBook, title: e.target.value })
                }
                placeholder="Title"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 theform" controlId="author">
              <Form.Label className="labels">Author Name</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={updatedBook.author}
                onChange={(e) =>
                  setUpdatedBook({ ...updatedBook, author: e.target.value })
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
                value={updatedBook.description}
                minLength="20"
                placeholder="Description"
                onChange={(e) =>
                  setUpdatedBook({ ...updatedBook, description: e.target.value })
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
                value={updatedBook.cover_image}
                onChange={(e) =>
                  setUpdatedBook({ ...updatedBook, cover_image: e.target.value })
                }
                required
              />
            </Form.Group>
            <div className="d-grid gap-2 col-6 mx-auto">
              <Button variant="secondary" type="submit" className="m-auto shadow create-btn">
                UPDATE
              </Button>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <Button variant="secondary" className="m-auto shadow create-btn" onClick={() => takebooks(`/books/${id}`)} >
                CANCEL
              </Button>
            </div>
          </Form>
          
        </Container>
      </div>
        
        )
}

export default UpdateBook;