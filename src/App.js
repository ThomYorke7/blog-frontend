import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import About from './components/about';
import Contact from './components/contacts';
import PostPage from './components/posts/postpage';
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route path='/' exact component={Homepage}></Route>
        <Route path='/about' exact component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/api/posts/:slug' component={PostPage}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
