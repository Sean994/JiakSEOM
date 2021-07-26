const SignIn = (props) => {
  return (
    <div>
      <h1> New User</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password" />
        <br />
        <label htmlFor="postal code">Postal code:</label>
        <input type="text" id="postal code" name="postal code" />
        <br />
        <br />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignIn;
