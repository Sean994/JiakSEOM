import { Navbar, Container, Nav, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'


const NavBar = (props) => {
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
            <Nav>
            <LinkContainer to="/user/signin" align="right">
              <Button variant="warning">Sign In</Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
