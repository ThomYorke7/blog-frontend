import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import './App.css';
import './bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Homepage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
