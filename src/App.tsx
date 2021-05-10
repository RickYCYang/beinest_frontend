import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './redux/configureStore';

import Routes from './view/Components/Routes';
import Drawer from './view/Components/Drawer';
import Footer from './view/Components/Footer';
import Topbar from './view/Topbar/Topbar';

import './Scss/App.scss';

const store = configureStore({});

const App = () => {
  return (
    <Provider store = {store}>
      <Topbar/>
      <Drawer />
      <ConnectedRouter history = {history} >
        <Routes/>
      </ConnectedRouter>
      <Footer />
    </Provider>
  );
}

export default App;
