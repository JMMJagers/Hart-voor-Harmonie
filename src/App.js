import React, {useEffect, useState, Fragment, Suspense} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import Header from './statics/inc/Header';
import Home from './statics/Home';
import Les from './statics/Les';
import Product from './statics/Product';
import Colors from './statics/Colors';
import About from './statics/About';
import Maten from './statics/Maten';

const App = () =>{

  return(
    <div id="root">
        <Fragment>
        <Header />
        <div>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/lessen"} component={Les} />
            <Route path={"/producten"} component={Product} />
            <Route path={"/kleurenoverzicht"} component={Colors} />
            <Route path={"/about"} component={About} />
            <Route path={"/maten"} component={Maten} />
          </Switch>
        </div>
        </Fragment>
    </div>
  );
}

export default App;
