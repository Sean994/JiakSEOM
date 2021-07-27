import { Navbar, Container, Nav, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'


const NavBar = (props) => {
  const axios = require('axios').default;
  const {name, setName} = props

  const logOut = () => {
    axios.delete('/user/signin',{})
    .then(res => setName(""))
    console.log('loggin out')
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>JiakSEOM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/landing/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/restaurants/all">
              <Nav.Link>Browse all restaurants</Nav.Link>
            </LinkContainer>
            </Nav>
            {name==="" || <h1>"Welcome", {name} </h1>}
            <Nav>
            {(name==="") ? 
            <LinkContainer to="/user/signin" align="right">
              <Button variant="warning">Sign In</Button>
            </LinkContainer> : 
            <Button variant="warning" onClick={logOut}>Sign Out</Button> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
