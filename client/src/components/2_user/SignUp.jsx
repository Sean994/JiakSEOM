// New Signup component. This component allows a user to sign up for our amazing
// Korean food delivery service.

//! TESTING PHASE - CODE MAY BE GROSSLY INCORRECT
//? Too tired to continue - will continue tomorrow.
//? I stopped at making the form handle validation. The POST API call needs to be tested too.
//? Refer to https://react-bootstrap.github.io/components/forms/#forms-validation-native 
//? Gordon, 28 July 1:40AM

import * as React from 'react';
import {useState} from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap';
const axios = require('axios').default;

const SignUp = (props) => {

  const [validated, setValidated] = useState(false); // this state is to handle form validation


  const handleSubmit = (event) => { // handleSubmit uses axios to POST a form
    event.preventDefault();
    axios
      .post('/api/v1/user', {
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        contact: event.target.contact.value,
        email: event.target.email.value,
        username: event.target.username.value,
        password: event.target.password.value,
        address: event.target.address.value,
        postal_code: event.target.postal_code.value,
        birthday: event.target.birthday.value,
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data === 'logged in!') {
          console.log("New user created")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>New User</h1>
      <h3>Embark on a brand new journey of gastronomic happiness.</h3>

      <Form noValidate validated={validated} >
  <Row className="mb-3">
    <Form.Group as={Col}>
      <Form.Label>First name</Form.Label>
      <Form.Control required type="first_name"/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Last name</Form.Label>
      <Form.Control type="last_name"/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Birthday</Form.Label>
      <Form.Control type="birthday"/>
    </Form.Group>

  </Row>

  <Row className="mb-3">

<Form.Group as={Col}>
      <Form.Label>Username</Form.Label>
      <Form.Control type="username"/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Password</Form.Label>
      <Form.Control type="password"/>
    </Form.Group>
</Row>



<Row className="mb-3">

<Form.Group as={Col}>
      <Form.Label>Contact Number</Form.Label>
      <Form.Control type="contact"/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Email</Form.Label>
      <Form.Control type="email"/>
    </Form.Group>
</Row>

<Row className="mb-3">

<Form.Group as={Col}>
      <Form.Label>Address</Form.Label>
      <Form.Control type="address"/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Postal Code</Form.Label>
      <Form.Control type="postal_code"/>
    </Form.Group>
</Row>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

    </div>
  );
};

export default SignUp;
