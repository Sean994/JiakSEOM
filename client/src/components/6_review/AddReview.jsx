//? This component allows one to add a restaurant review after checkout.
//? The form at the bottom should send a POST request into the review API

import { Container, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
// import axios from 'axios';

const AddReview = () => {
  let { id } = useParams();

  return (
    <Container>
      <h1>How did we do? Leave a review for {id}!</h1>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Rate {id}!</Form.Label>
          <div className="mb-3">
            <Form.Check inline label="1" name="rate" type="radio" />
            <Form.Check inline label="2" name="rate" type="radio" />
            <Form.Check inline label="3" name="rate" type="radio" />
            <Form.Check inline label="4" name="rate" type="radio" />
            <Form.Check inline label="5" name="rate" type="radio" />
          </div>
          <Form.Label>Your review</Form.Label>
          <Form.Control as="textarea" rows={3} />

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
