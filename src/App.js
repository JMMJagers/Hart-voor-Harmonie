import React, {useEffect, useState, Fragment, Suspense} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import Header from './statics/inc/Header';
import Home from './statics/Home';
import Les from './statics/Les';
import Product from './statics/Product';

const App = () =>{

  return(
    <div className="App" id="root">
        <Fragment>
        <Header />
        <div className='page--body'>
          <Switch>
            <Route exact path={"/index"} component={Home} />
            <Route exact path={"/lessen"} component={Les} />
            <Route exact path={"/producten"} component={Product} />
            <Route exact path={"/"} component={Home} />
          </Switch>
        </div>
        </Fragment>
    </div>
  );
}

export default App;
