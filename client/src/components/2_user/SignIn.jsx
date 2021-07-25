import { Link } from "react-router-dom"

const SignIn = (props) => {

    return (
        <div>
            <h1>User Sign In</h1>
             <form>
                <label htmlFor="username">
                    Username: 
                </label>
                <input 
                type="text" 
                id="username"
                name="username"
                />
                <br/>
                <label htmlFor="password">
                    Password: 
                </label>
                <input 
                type="text" 
                id="password"
                name="password"
                />
                <br/>
                <input 
                type="submit" 
                value="Sign In"/>
                <br/>
                <br/>
                <span>New User? </span>
                <Link to="/user/signup">
                <button>Sign Up</button>
                </Link>
            </form>
        </div>
    )
}

export default SignIn