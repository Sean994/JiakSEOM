//? This component allows one to add a restaurant review after checkout.
//? The form at the bottom should send a POST request into the review API

import axios from 'axios';
import queryString from 'query-string';
import { Button, Container, Form } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useState } from 'react'

// install query-string from npm, and then find a way to get the data inside
//http://localhost:3000/review?user=60fe3277d6932e1093b56255&restaurant=60fe44b63731471b031b10ca&orderid=61022e8b4d5058181389c56b
const AddReview = () => {
  const { search } = useLocation();
  const { user, restaurant, orderid } = queryString.parse(search);
  const [resName, setResName] = useState()
  
  const history = useHistory();
  axios
    .get(`/api/v1/restaurants/${restaurant}`)
    .then((res) => {
      setResName(res.data.restaurant.name)
    })

  const postReviewHandler = (event) => {
    event.preventDefault();
    axios
      .post(`/api/v1/reviews`, {
        user: user,
        restaurant: restaurant,
        rating: event.target.rate.value * 1,
        review: event.target.review.value,
        orders: orderid,
      })
      .then((res) => {
        console.log(res.data);
        history.push('/landing');
      })

      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <Container>
      <h1>How did we do? Leave a review for {resName}!</h1>

      <Form onSubmit={postReviewHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Rate {orderid}!</Form.Label>
          <div className="mb-3">
            <Form.Check inline label="1" name="rate" type="radio" />
            <Form.Check inline label="2" name="rate" type="radio" />
            <Form.Check inline label="3" name="rate" type="radio" />
            <Form.Check inline label="4" name="rate" type="radio" />
            <Form.Check inline label="5" name="rate" type="radio" />
          </div>
          <Form.Label>Your review</Form.Label>
          <Form.Control as="textarea" rows={3} name="review" />

          <Form.Text className="text-muted">
            Your review will help us make this platform better!
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddReview;
