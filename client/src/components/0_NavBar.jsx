import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'; //! deleted container import
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import PostalCode from './0_NavBarPostal.jsx';
import { useMain, actions } from './utils/MainProvider.jsx';

const NavBar = () => {
  const { mainState, mainDispatch } = useMain();
  const history = useHistory();
  const axios = require('axios').default;

  // State logic for delivery offCanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logOut = () => {
    axios.delete('/user/signin', {}).then((res) => {
      mainDispatch({ type: actions.SIGNOUT });
    });
    console.log('loggin out');
    history.push('/');
  };

  return (
    <Navbar className="shadow py-3 px-4 mb-5 bg-body rounded" expand="lg">
      <LinkContainer to="/landing">
        <Navbar.Brand className="text-dark fs-3 fw-bold ">
          <FontAwesomeIcon icon={['fas', 'cloud-meatball']} className="me-2" />
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
        {mainState.isAuthenticated && (
          <Nav>
            <h6 className="navBarDes text-dark">
              Welcome, {mainState.user.username}🍉{' '}
            </h6>
            <NavDropdown
              title="User"
              id="basic-nav-dropdown"
              className="text-secondary"
            >
              <NavDropdown.Item as={Link} to="/user/edit">
                <FontAwesomeIcon
                  icon={['fas', 'user-edit']}
                  className="me-1 text-warning"
                />
                Edit Info
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/user/history">
                <FontAwesomeIcon
                  icon={['fas', 'user-edit']}
                  className="me-1 text-warning"
                />
                Order History
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        )}
        <Button variant="light" onClick={handleShow}>
          <h6 className="navBarDes text-dark">
            Delivering to:{' '}
            {mainState.address ? mainState.address : 'Click to input address'}
          </h6>
        </Button>

        <Offcanvas show={show} onHide={handleClose} placement="top">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Changing your location?</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <PostalCode handleClose={handleClose} />
          </Offcanvas.Body>
        </Offcanvas>

        <Nav>
          {!mainState.isAuthenticated && (
            <LinkContainer to="/user/signin" align="right">
              <Button variant="warning">
                <FontAwesomeIcon icon={['far', 'user']} className="me-2" />
                <span>Sign In</span>
              </Button>
            </LinkContainer>
          )}
          {mainState.isAuthenticated && (
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
          {mainState.order && (
            // <LinkContainer to="/checkout">
            <Nav.Link className="text-secondary">
              <FontAwesomeIcon
                icon={['fas', 'shopping-basket']}
                size="lg"
                className="ms-4 text-warning"
              />
              <span className="badge text-danger">{Object.keys(mainState.order).length|| 1}</span>
            </Nav.Link>
            // </LinkContainer>
          )}{' '}
          {!mainState.isAuthenticated ?? !mainState.order ?? (
            <FontAwesomeIcon
              icon={['fas', 'shopping-basket']}
              size="lg"
              className="ms-4 text-warning"
            />
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
