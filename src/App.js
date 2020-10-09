import React from 'react';
import { FaqsContainer } from './containers/faqs';
import { FooterContainer } from './containers/footer';
import { JumbotronContainer } from './containers/jumbotron';
import * as ROUTES from './constants/routes';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import {Home,Browse,Signin,Signup} from './pages';


const  App = () => {
  return (
    <Router>
      <Route exact path ={ROUTES.HOME}>
       <Home/>
      </Route> 
      <Route exact path ={ROUTES.SIGN_UP}>
       <Signup/>
      </Route>
      <Route exact path ={ROUTES.SIGN_IN}>
       <Signin/>
      </Route>
      <Route exact path ={ROUTES.BROWSE}>
       <Browse/>
      </Route>
    </Router>
  );
}

export default App;