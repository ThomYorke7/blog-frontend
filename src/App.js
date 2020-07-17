import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import PostPage from './components/postpage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage}></Route>
        <Route path='/api/posts/:slug' component={PostPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
