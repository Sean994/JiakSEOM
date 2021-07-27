// This component checks a postal code against an API, and presents an input form to the user.
// Gordon Chia, 27 July 2021

import { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const PostalCode = (props) => {
  const [postal, setPostal] = useState('');
  const [address, setAddress] = useState('');

  const handleChange = (event) => {
    setAddress('checking postal code...');
    setPostal(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(postal);
    event.preventDefault();
  };

  const locateUser = () => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    const success = async (pos) => {
      var crd = await pos.coords;
      const res = await fetch(
        `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${crd.latitude.toString()}%2C${crd.longitude.toString()}&lang=en-US&apikey=uNAkp3A6Cxt2gEfx5jOBafT1FF53HP_uyjyrK0Q9K0s`,
        { mode: 'cors' }
      );
      const json = await res.json();
      Promise.all([json]).then(setPostal(json.items[0].address.postalCode));
    };
    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  useEffect(() => {
    const checkPostal = async () => {
      const updateAddress = (values) => {
        console.log(values);
        if (values?.items?.[0]?.title === undefined) {
          console.log('address is wrong');
          setAddress('Postal code not found. Please try again.');
        } else {
          setAddress(values.items[0].title);
        }
      };

      if (postal !== '') {
        const res = await fetch(
          `https://geocode.search.hereapi.com/v1/geocode?qq=postalCode=${postal}&in=countryCode%3ASGP&apikey=uNAkp3A6Cxt2gEfx5jOBafT1FF53HP_uyjyrK0Q9K0s`,
          { mode: 'cors' }
        );
        const json = await res.json();
        Promise.all([res, json]).then((values) => updateAddress(values[1]));
      }
    };
    let timeout = setTimeout(() => {
      checkPostal();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [postal]);

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="align-items-center">
            <Form.Label>Postal Code:</Form.Label>
            <Form.Control type="text" value={postal} onChange={handleChange} />
            <br />
              <Button variant="primary" size="lg" type="submit">
                Delivery
              </Button>
              <Button
                variant="secondary"
                size="lg"
                type="button"
                onClick={locateUser}
              >
                Locate Me
              </Button>
          </Form.Group>
        </Form>
        <br />
        Your postal code is: {postal}. Your address is: {address}.
      </Container>
      <br />
    </div>
  );
};

export default PostalCode;
