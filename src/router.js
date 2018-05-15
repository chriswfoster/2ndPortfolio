import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//import Components to be rendered here
import Home from './components/Home/Home';


export default (
  <BrowserRouter>
    <div>
      <Route component={Home} exact path="/" />
   
    </div>
  </BrowserRouter>
);