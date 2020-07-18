import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import About from './components/about';
import Contact from './components/contacts';
import PostPage from './components/posts/postpage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/api/posts/:slug' component={PostPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
