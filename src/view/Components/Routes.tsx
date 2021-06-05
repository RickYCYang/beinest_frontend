import React from 'react';
import { Route, Switch } from 'react-router'; // react-router v4/v5
import About from '../About/About';
import Home from '../Home/Home';
import PortfolioPage from '../Portfolio/PortfolioPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home /> 
            </Route>
            <Route exact path="/portfolioCatg/:category">
                <PortfolioPage /> 
            </Route>
            <Route exact path="/about">
                <About showLogo={true}/> 
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