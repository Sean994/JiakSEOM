// New Signup component. This component allows a user to sign up for our amazing
// Korean food delivery service.



import {Form, Button, Col, Row} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
const axios = require('axios').default;

const SignUp = (props) => {
let history = useHistory();

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
        if (response.data.status === 'success') {
          console.log("New user created")
          history.push("/user/signin")
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

      <Form onSubmit={handleSubmit}>
  <Row className="mb-3">
    <Form.Group as={Col}>
      <Form.Label>First name</Form.Label>
      <Form.Control type="text" name="first_name"/>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Last name</Form.Label>
      <Form.Control type="text" name="last_name"/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Birthday</Form.Label>
      <Form.Control type="date" name="birthday"/>
    </Form.Group>

  </Row>

  <Row className="mb-3">

<Form.Group as={Col}>
      <Form.Label>Username</Form.Label>
      <Form.Control required type="text" name="username"/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Password</Form.Label>
      <Form.Control required type="password" name="password"/>
    </Form.Group>
</Row>



<Row className="mb-3">

<Form.Group as={Col}>
      <Form.Label>Contact Number</Form.Label>
      <Form.Control required type="tel" name="contact"/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Email</Form.Label>
      <Form.Control required type="email" name="email"/>
    </Form.Group>
</Row>

<Row className="mb-3">

<Form.Group as={Col}>
      <Form.Label>Address</Form.Label>
      <Form.Control required type="address" name="address"/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Postal Code</Form.Label>
      <Form.Control required type="number" name="postal_code"/>
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
