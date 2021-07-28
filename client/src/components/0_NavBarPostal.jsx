// This component checks a postal code against an API, and presents an input form to the user.

import { useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';


const PostalCode = (props) => {
  const { postal, setPostal, setAddress, address } = props;

  const handleChange = (event) => {
    setPostal(event.target.value);
  };


  const handleSubmit = (event) => {
    console.log(postal);
    event.preventDefault();

    if (address !== "") {
      alert("Address Updated!")
    } else {
      alert("Wrong Address. Please try again.")
    }
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
  }, [postal, setAddress]);

  return (
    <Container className="my-4 py-4 mx-auto shadow mb-5 bg-body rounded-2">
      <Form
        onSubmit={handleSubmit}
        className="justify-content-center align-items-center"
      >
        <div className="row g-0 px-2">
          <div className="col-sm-6 col-md-9  ">
            <Form.Control
              size="lg"
              type="text"
              pattern="[0-9]{6}"
              maxLength="6"
              value={postal}
              onChange={handleChange}
              placeholder="Postal Code"
              className="rounded-0"
            />
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-center align-items-center ">
            <Button
              variant="danger"
              type="submit"
              className="btn-lg rounded-0"
            >
              Change Address
            </Button>

            <Button
              variant="warning"
              type="button"
              onClick={locateUser}
              className="rounded-0 btn-lg"
            >
              Locate Me
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default PostalCode;
