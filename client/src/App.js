import { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import './styles/style.css'
import NavBar from './components/0_NavBar';
import Landing from './components/1_landing/Landing';
import SignIn from './components/2_user/SignIn';
import SignUp from './components/2_user/SignUp';
import Restaurants from './components/3_restaurants/Restaurants';
import RestaurantID from './components/3_restaurants/RestaurantID';

function App() {
  const [rest, setRest] = useState("")
  const restLiClick = (i) => {
    console.log('hey', i)
    setRest(i)
  }
  return (
    <div className="App">
      <NavBar />
      <main>
        <Route exact path="/">
            <Redirect to="/landing" />
        </Route>
        <Route path="/landing">
          <Landing/>
        </Route>
        <Route path="/user/signin">
          <SignIn/>
        </Route>
        <Route path="/user/signup">
          <SignUp/>
        </Route>
        <Route path="/restaurants/all">
          <Restaurants clickHandle={restLiClick}/>
        </Route>
        <Route path="/restaurants/id">
          <RestaurantID rest={rest}/>
        </Route>
        <Route path="/checkout">
          
        </Route>
      </main>
    </div>
  );
}

export default App;
