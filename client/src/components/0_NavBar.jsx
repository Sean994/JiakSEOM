import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Nav, Navbar, Offcanvas } from 'react-bootstrap'; //! deleted container import
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';
import PostalCode from './0_NavBarPostal.jsx';

const NavBar = (props) => {
  const axios = require('axios').default;
  const { user, setUser, setPostal, postal, address, setAddress, order } = props;

  // State logic for delivery offCanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logOut = () => {
    axios.delete('/user/signin', {}).then((res) => {
      setUser(() => '');
      setPostal(() => '');
      setAddress(() => '');
    });
    console.log('loggin out');
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
        {user.username && (
          <Nav>
            <h6 className="navBarDes text-dark">Welcome, {user.username}🍉 </h6>
            <LinkContainer to="/user/edit">
              <Nav.Link className="text-secondary">
                <FontAwesomeIcon
                  icon={['fas', 'user-edit']}
                  size="lg"
                  className="me-1 text-warning"
                />
              </Nav.Link>
            </LinkContainer>
          </Nav>
          )}
          {address === '' || (
            <>
              <Button variant="light" onClick={handleShow}>
                <h6 className="navBarDes text-dark">
                  Delivering to: {address?.substring(0, address.length - 11)}
                </h6>
              </Button>

              <Offcanvas show={show} onHide={handleClose} placement="top">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Changing your location?</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <PostalCode postal ={postal} setPostal={setPostal} address={address} setAddress={setAddress} handleClose={handleClose}/>
                </Offcanvas.Body>
              </Offcanvas>
            </>
          )}
          {user.username === undefined || (
            <h6 className="navBarDes text-dark">Welcome, {user.username} </h6>
       )}
        <Nav>
          {!user.username ? (
            <LinkContainer to="/user/signin" align="right">
              <Button variant="warning">
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
          <LinkContainer to="/checkout">
            <Nav.Link className="text-secondary">
              <FontAwesomeIcon
                icon={['fas', 'shopping-basket']}
                size="lg"
                className="ms-4 text-warning"
              />
              <span className="badge text-danger">{order.orders.length}</span>
            </Nav.Link>
          </LinkContainer>
        </Nav>
        {/* <Nav>
            <LinkContainer to="/checkout">
              <Nav.Link className="text-secondary">checkout</Nav.Link>
            </LinkContainer>
          </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;