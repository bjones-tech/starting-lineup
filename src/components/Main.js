import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Lineup from './Lineup';
import Player from './Player';
import Roster from './Roster';

const NavBar = () => (
  <nav>
    <ul class='nav-list'>
      <li><Link to={'/'}><button>Roster</button></Link></li>
      <li><Link to={'/lineup'}><button>Lineup</button></Link></li>
    </ul>
  </nav>
)

const Main = () => (
  <Router>
    <span class='App-main'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Roster} />
        <Route path='/lineup' component={Lineup} />
        <Route path='/player/:number' component={Player} />
      </Switch>
    </span>
  </Router>
)

export default Main