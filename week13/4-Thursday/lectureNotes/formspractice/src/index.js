import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import Forms from './components/Forms';
import FormsHook from './components/FormsWHooks';
import Parent from './components/liftingState/Parent';
import ProjectManagement from './components/projectManagement/ProjectManagement';

const NoMatch = () => <div>Error: Can Not Find Route</div>




ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/forms' component={Forms}/>
          <Route path='/formshooks' component={FormsHook}/>
          <Route path='/lifting_state' component={Parent}/>
          <Route path='/project_management' component={ProjectManagement}/>
          <Route component={NoMatch}/>
        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

