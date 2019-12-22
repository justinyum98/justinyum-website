import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Layout from '../Layout';
import Navbar from '../Navbar';
import Home from '../Home';
import About from '../About';
import Music from '../Music';
import Posts from '../Posts';
import Contact from '../Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
