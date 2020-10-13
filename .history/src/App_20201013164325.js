import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MainView from './Components/MainView/MainView';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <main>
          <Switch>
            <Route exact path='/'>
              <MainView />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
