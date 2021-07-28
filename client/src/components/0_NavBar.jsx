import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = (props) => {
  const axios = require('axios').default;
  const { name, setName, address } = props;

  const logOut = () => {
    axios.delete('/user/signin', {}).then((res) => setName(''));
    console.log('loggin out');
  };

  return (
    <Navbar className="shadow p-3 mb-5 bg-body rounded" expand="lg">
      <Container>
        <LinkContainer to="/landing">
          <Navbar.Brand className="text-dark fs-3 fw-bold ">
            <FontAwesomeIcon
              icon={['fas', 'cloud-meatball']}
              className="me-2"
            />
            JiakSEOM
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/landing/">
              <Nav.Link className="text-secondary">
                <FontAwesomeIcon icon={['fas', 'home']} className="me-2" />
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/restaurants/all">
              <Nav.Link className="text-success">
                <FontAwesomeIcon icon={['fas', 'utensils']} className="me-2" />
                Our Restaurants
              </Nav.Link>
            </LinkContainer>
          </Nav>
          {address.length < 22 || (
            <h6 className="navBarDes text-dark">
              Delivering to: {address?.substring(0, address.length - 11)}
            </h6>
          )}
          {name === '' || (
            <h6 className="navBarDes text-dark">Welcome, {name} </h6>
          )}
          <Nav>
            {name === '' ? (
              <LinkContainer to="/user/signin" align="right">
                <Button variant="warning">
                  {' '}
                  <FontAwesomeIcon icon={['far', 'user']} className="me-2" />
                  <span>Sign In</span>
                </Button>
              </LinkContainer>
            ) : (
              <Button variant="warning" onClick={logOut}>
                <FontAwesomeIcon
                  icon={['fas', 'sign-out-alt']}
                  className="me-1"
                />
                Sign Out
              </Button>
            )}
          </Nav>
          <Nav>
            <FontAwesomeIcon
              icon={['fas', 'shopping-basket']}
              size="lg"
              className="ms-4 text-warning"
            />
            <span className="badge text-danger">1</span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
