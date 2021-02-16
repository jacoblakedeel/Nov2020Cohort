import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './reducers/counterReducer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import ViewCount from './components/ViewCount';
import CountHooks from './components/CountHooks';
import ViewCountHooks from './components/ViewCountHooks';
import Forms from './components/Forms';


let store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //pass a reducer



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/count" component={ViewCount}/>
            <Route path="/count_hooks" component={CountHooks}/>
            <Route path="/view_count_hooks" component={ViewCountHooks}/>
            <Route path="/forms" component={Forms}/>
          </Switch>
        </BaseLayout>
      </Router>
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

