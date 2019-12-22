import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Box from '@material-ui/core/Box';

import Layout from '../Layout';
import Navbar from '../Navbar';
import MobileNavbar from '../MobileNavbar';
import Home from '../Home';
import About from '../About';
import Music from '../Music';
import Posts from '../Posts';
import Contact from '../Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
          <Navbar />
        </Box>
        <Box display={{ xs: 'block', sm: 'block', md: 'none' }}>
          <MobileNavbar />
        </Box>
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
