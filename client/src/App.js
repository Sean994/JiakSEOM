import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/0_NavBar';
import Landing from './components/1_landing/Landing';
import SignIn from './components/2_user/SignIn';
import SignUp from './components/2_user/SignUp';
import UserHistory from './components/2_user/UserHistory';
import RestaurantID from './components/3_restaurants/RestaurantID';
import Restaurants from './components/3_restaurants/Restaurants';
import CheckOut from './components/4_checkout/Checkout.jsx';
import Reviews from './components/6_review/Reviews';
import { actions, useMain } from './components/utils/MainProvider';
import './styles/style.css';

const PrivateRoute = ({ children, ...rest }) => {
  const { mainState } = useMain();
  console.log(mainState.isAuthenticated);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return localStorage.getItem('isAuthenticated') === 'true' ? (
          children
        ) : (
          <Redirect
            to={{ pathname: '/user/signin', state: { from: location } }}
          />
        );
      }}
    />
  );
};

function App() {
  const { mainState, mainDispatch } = useMain();

  console.log('🍺', mainState);

  useEffect(() => {
    axios.get('/user/signin').then((res) => {
      if (res.status === 200) {
        mainDispatch({ type: actions.SIGNIN, payload: res.data });
      }
    });
  }, [mainDispatch]);

  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/landing" />
          </Route>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/user/signin">
            <SignIn />
          </Route>
          <Route path="/user/signup">
            <SignUp />
          </Route>

          <Route exact path="/restaurants/all">
            <Restaurants />
          </Route>
          <Route path="/restaurants/:id">
            <RestaurantID />
          </Route>
          {/* if cookie with the session id => (loggedin) => link to checkout 
          if no cookie with the session id => link to login page */}

          <PrivateRoute>
            <Route path="/user/history">
              <UserHistory />
            </Route>
            <Route path="/review">
              <Reviews />
            </Route>
            <Route path="/user/edit">
              <SignUp />
            </Route>
            <Route path="/review">
              <Reviews />
            </Route>
            <Route path="/checkout">
              <CheckOut />
            </Route>
          </PrivateRoute>

          <Redirect from="*" to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
