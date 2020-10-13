import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MainView from './Components/MainView/MainView';
import Nav from './Components/Nav/Nav';
import FinancesView from './Components/FinancesView/FinancesView';

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
            <Route path='/finances'>
              <FinancesView />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
