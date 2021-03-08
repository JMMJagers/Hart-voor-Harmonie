/*
  *******************
  JMMJagers ©2021
  *******************
*/
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
//import {Route, Router} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './scss/style.scss';

ReactDOM.render(
    <Router><App /></Router>,
    document.getElementById('root')
);
