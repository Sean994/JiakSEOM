import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { actions, useMain } from '../utils/MainProvider';

const axios = require('axios').default;

const SignIn = (props) => {
  let history = useHistory();

  const { mainDispatch } = useMain();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/user/signin', {
        username: event.target.username.value,
        password: event.target.password.value,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          mainDispatch({ type: actions.SIGNIN, payload: res.data });
          history.push('/landing');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
