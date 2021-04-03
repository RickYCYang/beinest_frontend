import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './redux/configureStore';
import './App.scss';

import Home from './view/Home';
import Drawer from './view/Drawer';
import Footer from './view/Components/Footer';
import About from './view/About/About'
import Topbar from './view/Topbar/Topbar';
import Portfolio from './view/Portfolio/Portfolio';


const store = configureStore({});

function App() {
  return (
    <Provider store = {store}>
      <Topbar/>
      <Drawer />
      <ConnectedRouter history = {history} >
      <Switch>
          <Route exact path="/">
              <Home /> 
          </Route>
          <Route exact path="/catg1">
              <Home /> 
          </Route>
          <Route exact path="/catg2">
              <Home /> 
          </Route>
          <Route exact path="/about">
              <About /> 
          </Route>
          <Route exact path="/portfolio">
              <Portfolio /> 
          </Route>
          <Route exact path="/portfolio/:category">
              <Portfolio /> 
          </Route>
          <Route path="/:id" children={<Home  />} />
          <Route exact path="*">
            <div>
              <h1>Sorry, No this page</h1>
            </div>
          </Route>
      </Switch>
      </ConnectedRouter>
      <Footer />
    </Provider>
  );
}

export default App;
