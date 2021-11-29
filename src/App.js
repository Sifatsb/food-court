import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Contact from './components/Contact/Contact';

// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import Offer from './components/Offer/Offer';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/SignUp/SignUp';

function App() {

  return (
    <div>
      <Header />
      {/* <Main />
      <Footer /> */}


      {/* <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/offer">Offer</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/offer">
              <Offer />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router> */}



      <Router>
        <Switch>

          <Route exact path="/">
            {/* <Home /> */}
            <Main />
            <Footer />

          </Route>

          <Route path="/offer">
            <Offer />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/signup">
            <SignUp/>
          </Route>

          {/* <Route exact path="/">
            <Home />
          </Route> */}

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
