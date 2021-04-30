import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './containers/home/Home';
import Todo from './containers/todo';
import Header from './components/header/Header';

import './App.scss';


const App = () => {

  return (
    <Router>
      <div style={{ padding: '15px' }} className="app-container">
        <Header />
        <hr />
        <Switch>
          <Route exact path="/">
            <Todo />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
