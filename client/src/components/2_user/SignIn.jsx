import { Link, useHistory } from 'react-router-dom';
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
    <div className="card" style={{ width: '30rem' }}>
      <h1>User Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Username:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="password"
              name="password"
              className="form-control"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <input type="submit" value="Sign In" />

          <span>New User? </span>
          <Link to="/user/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
