import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Layout from '../Layout/Layout';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/music">
            Music component here
          </Route>
          <Route path="/posts">
            Posts component here
          </Route>
          <Route path="/contact">
            Contact component here
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
