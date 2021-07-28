import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/0_NavBar';
import Landing from './components/1_landing/Landing';
import SignIn from './components/2_user/SignIn';
import SignUp from './components/2_user/SignUp';
import RestaurantID from './components/3_restaurants/RestaurantID';
import Restaurants from './components/3_restaurants/Restaurants';
import CheckOut from './components/4_checkout/checkout';
import './styles/style.css';

function App() {
  const [rest, setRest] = useState('');
  const [name, setName] = useState('');
  const [postal, setPostal] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    axios.get('/user/signin').then((res) => {
      if (res.data.username) {
        setName(res.data.username);
      }
    });
  });

  const restLiClick = (i) => {
    console.log('hey', i);
    setRest(i);
  };
  return (
    <div className="App">
      <NavBar name={name} setName={setName} setPostal={setPostal} address={address} />
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/landing" />
          </Route>
          <Route path="/landing">
            <Landing
              postal={postal}
              setPostal={setPostal}
              address={address}
              setAddress={setAddress}
            />
          </Route>
          <Route path="/user/signin">
            <SignIn setName={setName} />
          </Route>
          <Route path="/user/signup">
            <SignUp />
          </Route>
          <Route exact path="/restaurants/all">
            <Restaurants clickHandle={restLiClick} />
          </Route>
          <Route path="/restaurants/:id">
            <RestaurantID rest={rest} />
          </Route>
          {/* if cookie with the session id => (loggedin) => link to checkout 
          if no cookie with the session id => link to login page */}
          <Route path="/checkout">
            <CheckOut />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
