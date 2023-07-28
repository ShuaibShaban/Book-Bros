import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


export default function CreateReviews({setReviews}) {
    const {id} = useParams()
    const [review, setReview] = useState({title: "", content: ""});

    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetch(`https://bookie-vdkb.onrender.com/books/${id}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({...review, book_id: id})
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            fetch(`https://bookie-vdkb.onrender.com/books/${id}`, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
                credentials: "include"
                        })
                        .then(res => res.json()).then(data => {
                            setReviews(data.reviews)
                            setReview({title: "", content: ""})
                        })

        });
    }

    return (
        <Container className='w-50 p-5' >
            <h2 className='header text-center' style={{textAlign: "center"}}>Create a New Review</h2>
            <Form onSubmit={handleOnSubmit} className='mx-auto '>
                <Form.Group className='mb-3' controlId="title" >
                    <Form.Label style={{paddingRight: "20px"}}>Review Title:</Form.Label>
                    <Form.Control type="text" name="title" value={review.title} onChange={(e) => setReview({...review, title: e.target.value})} required />
                </Form.Group>
                <Form.Group className='mb-3' controlId="content">
                <Form.Label style={{float: "left"}}>Content:</Form.Label>
                    <Form.Control as='textarea' minLength="20" name="content" value={review.content} onChange={(e) => setReview({...review, content: e.target.value})} style={{ height: '70px' }} required />
                </Form.Group>
                <div className='d-grid gap-2 col-6 mx-auto thesub'>
                    <Button variant='secondary' type='submit' className='m-auto shadow thesub' >Submit</Button>
                </div>
            </Form>
        </Container>
        
    );
}