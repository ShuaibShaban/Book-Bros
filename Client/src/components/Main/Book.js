import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import BookReview from "./BookReview";
import CreateReviews from "./CreateReviews";
import Navbar from "../navbar/Navbar";
import './style/singlebook.css'




function Book({idCurrentUser}) {
    const [book, setBook] = useState({ })
    const [reviews, setReviews] = useState([])
    const { id } = useParams();
    let taketobooks = useNavigate()
    // let reviews;

    useEffect(() => {
        fetch(`https://bookie-vdkb.onrender.com/books/${id}`,{
            method: 'GET',
            credentials: "include"
        })
        .then(res => res.json()).then((data) => {
            // console.log(id)
            // console.log(data.reviews)
            setBook(data)
            setReviews(data.reviews)
            // taketobooks(`/books/${id}`)



        })
    }, [id])

    function deleteBook(){
        fetch(`https://bookie-vdkb.onrender.com/books/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            credentials: "include"
        }).then(resp => {
            // fetch('http://localhost:3000/books').then(response => response.json()).then(data => {
                // setBooks(data)
                taketobooks('/books')
        // })
        })

    }

let reviewsLi;

    if(reviews.length > 0) {
        reviewsLi = reviews.map((review) => {  return <BookReview review={review} key={review.id} nowBookID={id} setReviews={setReviews} reviews={reviews} idCurrentUser={idCurrentUser} />  })
    }else{
        reviewsLi = <li style={{textAlign: "center"}}>Be the first to add Review</li>
    }
    

    return (
        <div>
            <Navbar />
        <Container>
            <Row>
                <Col md={6} className="imageBook">
                    <img src={book.cover_image} width='300' alt={`Cover of ${book.title}.`} className='pt-2 pb-2 mr-auto ml-auto shadow' style={{ display: 'block' }} />
                </Col>
                <Col lg={true}>
                    <div className="book-details">
                    <h2 className="header text-center pt-5">{book.title}</h2>
                    <h3 className="font-italic text-center">AUTHOR: {book.author}</h3>
                    <p>{book.description}</p>
                    <Button variant="warning" className='shadow m-3' style={{marginRight: "10px"}} onClick={() => taketobooks(`/books/${id}/update`) }>Update Book</Button>
                    <Button variant="warning" className='shadow m-3' onClick={deleteBook}>Delete Book</Button>
                    </div>
                        <CreateReviews setReviews = {setReviews}/>


                    <h2 className='header text-center bg-primary text-white review-title'>Reviews</h2>
                    <ul className="bookreview">
                        {reviewsLi}
                    </ul>


                </Col>
            </Row>
        </Container>
        </div>
    );

}

export default Book;