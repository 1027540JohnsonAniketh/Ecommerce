import './App.css';
import Header from './Header'; 
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, { useEffect }  from 'react';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';


const promise = loadStripe('pk_test_51J64UPSGoc3LAjbXFgnvEa1OwNMuX5EfL8fdSNA1VOlyCOkQPkHui4xmOcFlFxBwemamuM4cexrb1oJpa8EFbr2o002SMECfRi');

function App() {

  const [{},dispatch] = useStateValue();


  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = "/orders">
            <Header/>
            <Orders/>
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path = "/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path = "/payment">
            <Header/>
            <Elements stripe = {promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path = "/">
            <Header/>
            <Home/>
          </Route>
        </Switch>

      </div>
    </Router>
    
  );
}

export default App;
