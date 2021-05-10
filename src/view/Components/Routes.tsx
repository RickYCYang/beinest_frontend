import React from 'react';
import { Route, Switch } from 'react-router'; // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router';
import About from '../About/About'
import PortfolioPage from '../Portfolio/PortfolioPage';
import Portfolio from '../Portfolio/Portfolio';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <PortfolioPage /> 
            </Route>
            <Route exact path="/portfolioCatg/:category">
                <PortfolioPage /> 
            </Route>
            <Route exact path="/portfolio/:id">
                <Portfolio /> 
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
    );
}

export default Routes;