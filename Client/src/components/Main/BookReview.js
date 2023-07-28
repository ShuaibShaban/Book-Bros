import React from "react";
import "./review.css";
import {Card, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'


export default function BookReview({review, nowBookID, setReviews, reviews, idCurrentUser}) {
  let takeupdateReview = useNavigate()
    function deleteReview(){
      fetch(`https://bookie-vdkb.onrender.com/books/${nowBookID}/reviews/${review.id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        credentials: "include"
    }).then(() => {
       let filteredReviews = reviews.filter((eachReview) => eachReview.id !== review.id )
        setReviews(filteredReviews)
    })
    }
  return (
    <li className="eachReview">
        <Card className='border-dark p-2 mb-2 shadow'>
          <Card.Title className="titleReviewCard"><em>{review.title}</em></Card.Title>
          <Card.Text>{review.content}
          <Button variant='secondary' hidden={idCurrentUser !== review.user_id} className='m-auto shadow reviews-btns' onClick={() => takeupdateReview(`/books/${nowBookID}/reviews/${review.id}/update`)}>Update</Button>
          <Button variant='secondary' hidden={idCurrentUser !== review.user_id} className='m-auto shadow reviews-btns' onClick={deleteReview}>Delete</Button>  
          </Card.Text>
        </Card>
    </li>

  );
}
