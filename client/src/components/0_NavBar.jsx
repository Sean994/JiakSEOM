import { Link } from "react-router-dom";
import membership from "../img/membership.png";
import restaurant from "../img/food.png"

const NavBar = (props) => {
  return (
    <div className="NavBar">
      <div className="NavTitle">
        <Link to="/landing/">
          <span>jiakSEOM</span>
        </Link>
      </div>
      <div className="NavBrowse">
        <Link to="/restaurants/all">
          <img alt="restaurants list" src={restaurant} />
          <span>Browse all restaurant</span>
        </Link>
      </div>

      <div className="NavSignIn">
        <Link to="/user/signin">
          <img alt="sign in" src={membership} />
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
