import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import MainView from './Components/MainView/MainView';
import Nav from './Components/Nav/Nav';
import FinancesView from './Components/FinancesView/FinancesView';
import NotesView from './Components/NotesView/NotesView';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <main className='main'>
          <Switch>
            <Route exact path='/'>
              <MainView />
            </Route>
            <Route path='/finances'>
              <FinancesView />
            </Route>
            <Route path='/notes'>
              <NotesView />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
