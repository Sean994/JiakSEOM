import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import { actions, useMain } from '../utils/MainProvider';
//import { useCookies } from 'react-cookie';

const axios = require('axios').default;

const SignIn = (props) => {
  //const [cookies, setCookie] = useCookies(['user-cookie']);
  const { state } = useLocation();
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const { mainDispatch } = useMain();
  const history = useHistory();
  //console.log(cookies);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/user/signin', {
        username: event.target.username.value,
        password: event.target.password.value,
      })
      .then((res) => {
        console.log('💚', res.data.user);
        if (res.status === 200) {
          mainDispatch({ type: actions.SIGNIN, payload: res.data.user });
          // setCookie('user', res.data.user, { path: '/', expires: 2 });
          localStorage.setItem('isAuthenticated', 'true');
          setRedirectToReferrer(true);
          history.push('/landing');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (redirectToReferrer === true) {
    const a = state?.from;
    console.log('state.from ', a);
    return <Redirect to={state?.from || '/'} />;
  }

  return (
    <div className="container  p-4 ">
      <div className="row ">
        <div className="col-md-4 mx-auto border border-warning  border-1 p-4 rounded-3 shadow">
          <div className="header-title text-center">
            <h1 className="wv-heading--title">Sign in</h1>
          </div>
          <div className="myform form">
            <form onSubmit={handleSubmit} className="container  p-4">
              <div className="mb-3 row">
                <div className="form-group">
                  <label htmlFor="username" className="col-sm-4 col-form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="col-sm-4 col-form-label">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                />
              </div>

              <div className="m-3 text-center">
                <button
                  type="submit"
                  value="Sign In"
                  className=" btn btn-block  btn btn-warning"
                >
                  <FontAwesomeIcon icon={['far', 'user']} className="me-1" />
                  Sign In
                </button>
              </div>
            </form>
            <div className="col-md-12 text-center my-3">
              <div className="login-or">
                <hr className="hr-or" />
                <span className="span-or">New User?</span>
              </div>
            </div>
            <div className="form-group text-center">
              <Link to="/user/signup">
                <button type="button" className=" btn btn-block  btn btn-info">
                  <FontAwesomeIcon
                    icon={['fas', 'user-plus']}
                    className="me-1"
                  />
                  Sign Up
                </button>
              </Link>
            </div>
            <p className="small mt-3">
              By signing up, you will be one of our precious customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
