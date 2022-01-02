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
import Login from './components/Login/Login';
import { motion } from 'framer-motion';
import Food from './components/Food/Food';
import Foods from './components/Foods/Foods';

function App() {

  return (
    <div>
      <Header />
  
      <Router>
        <Switch>

          <Route exact path="/">
            {/* <Home /> */}
            <Main />
            <Footer />

          </Route>

          <Route path="/offer">
          <motion.div initial={{opacity:0}} animate={{ opacity:1 }} transition={{ duration: 1.5 }} >
            <Food/>
            </motion.div>
          </Route>

          <Route path="/profile">
          <motion.div initial={{opacity:0}} animate={{ opacity:1 }} transition={{ duration: 1.5 }} >
            <Profile/>
            </motion.div>
          </Route>

          <Route path="/contact">
          <motion.div initial={{opacity:0}} animate={{ opacity:1 }} transition={{ duration: 1.5 }} >
            <Contact/>
            </motion.div>
          </Route>

          <Route path="/signup">
            <motion.div initial={{opacity:0}} animate={{ opacity:1 }} transition={{ duration: 1.5 }} >
            <SignUp/>
            </motion.div>
          </Route>

          <Route path="/login">
          <motion.div initial={{opacity:0}} animate={{ opacity:1 }} transition={{ duration: 1.5 }} >
            <Login/>
            </motion.div>
          </Route>

          {/* <Route exact path="/">
            <Home />
          </Route> */}

          <Route path="*">
          <motion.div initial={{opacity:0}} animate={{ opacity:1 }} transition={{ duration: 1.5 }} >
            <NotFound/>
            </motion.div>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
