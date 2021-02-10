import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import Sample1 from './components/Sample1';
import Sample2 from './components/Sample2';

const About = () => <h1 className="text">About Us</h1>
const Contact = () => <h1 className="text">Contact Us</h1>
const Blog = (props) => {
  return(
    <>
    <h1 className="text">MY Blogs</h1>
    <h1 className="text">{props.match.params.blogID} </h1>
  </>
  )
  
}
const Comments = () => <h1 className="text">Comments</h1>
const NoMatch = () => <h1 className="text">NoMatch</h1>





ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/about" component={About}/>
          <Route path="/contactUs" component={Contact}/>
          <Route path="/blog/:blogID" component={Blog}/>
          <Redirect from="/blog" to="/"/>
          <Route path="/blog" component={Blog}/>
          <Route path="/comment" component={Comments}/>
          <Route path="/sample1" component={Sample1}/>
          <Route path="/sample2/:id" component={Sample2}/>
          <Route path="/sample2" component={Sample2}/>
          <Route component={NoMatch} />
        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

