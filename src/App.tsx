import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './redux/configureStore';
import './App.scss';

import Drawer from './view/Components/Drawer';
import Footer from './view/Components/Footer';
import About from './view/About/About'
import Topbar from './view/Topbar/Topbar';
import PortfolioList from './view/Portfolio/PortfolioList';


const store = configureStore({});

function App() {
  return (
    <Provider store = {store}>
      <Topbar/>
      <Drawer />
      <ConnectedRouter history = {history} >
      <Switch>
          <Route exact path="/">
              <PortfolioList /> 
          </Route>
          <Route exact path="/portfolio/:category">
              <PortfolioList /> 
          </Route>
          <Route exact path="/about">
              <About /> 
          </Route>
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
