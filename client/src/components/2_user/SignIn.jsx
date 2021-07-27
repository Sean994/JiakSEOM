import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const axios = require('axios').default;

const SignIn = (props) => {
  let history = useHistory();
  const { setName } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/user/signin', {
        username: event.target.username.value,
        password: event.target.password.value,
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data === 'logged in!') {
          setName(response.data.username);
          history.push('/restaurants/all');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container  p-4 ">
      {/* <div class="col-md-6 mx-auto text-center">
        <div class="header-title">
          <h1 class="wv-heading--title">Sign in</h1>
        </div>
      </div> */}
      <div className="row ">
        <div className="col-md-4 mx-auto border border-warning  border-1 p-4 rounded-3 shadow">
          <div class="header-title text-center">
            <h1 class="wv-heading--title">Sign in</h1>
          </div>
          <div className="myform form">
            <form onSubmit={handleSubmit} className="container  p-4">
              <div className="mb-3 row">
                <div class="form-group">
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
              <div class="form-group">
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
              <div class="col-md-12 text-center my-3">
                <div class="login-or">
                  <hr class="hr-or" />
                  <span class="span-or">New User?</span>
                </div>
              </div>
              <div class="form-group text-center">
                <Link to="/user/signup">
                  <button className=" btn btn-block  btn btn-info">
                    <FontAwesomeIcon
                      icon={['fas', 'user-plus']}
                      className="me-1"
                    />
                    Sign Up
                  </button>
                </Link>
              </div>
              <p class="small mt-3">
                By signing up, you will be one of our precious customers.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
