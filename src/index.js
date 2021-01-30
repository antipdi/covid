import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './index.css';
import Main from './pages/HomePage';
import CouPage from './pages/CouPage';





ReactDOM.render(<Router>
  <Switch>
    <Route exact="exact" path="/"><Main/></Route>
    <Route path="/country"><CouPage/></Route>
  </Switch>

</Router>,
  document.getElementById('root')
);
