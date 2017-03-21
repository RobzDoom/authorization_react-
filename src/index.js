import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types'

import App from './components/app';
import Home from './components/home';
import SignUp from './components/auth/signup';
import Signin from './components/auth/signin'
import Signout from './components/auth/signout';
import Feature from './components/feature'
import requireAuth from './components/require_auth'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

const token = localStorage.getItem('token');
if(token){
    store.dispatch({ type: AUTH_USER })
}


ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
              <Route path='signup' component={SignUp}/>
              <Route path='signin' component={Signin}/>
              <Route path='signout' component={Signout}/>
              <Route path='feature' component={requireAuth(Feature)}/>
          </Route>
      </Router>
  </Provider>
  , document.querySelector('.container'));
