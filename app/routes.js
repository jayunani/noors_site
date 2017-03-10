import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Henna1 from './components/Henna1';
import Mubarak12 from './components/Mubarak12';
import Sajna123 from './components/Sajna123';
import Mabrook23 from './components/Mabrook23';
import Sulenoor3 from './components/Sulenoor3';
import Nooresul2 from './components/Nooresul2';
import Tchowdhry13 from './components/Tchowdhry13';
import Error1 from './components/Error1';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='henna1' component={Henna1} />
    <Route path='mubarak12' component={Mubarak12} />
    <Route path='sajna123' component={Sajna123} />
    <Route path='mabrook23' component={Mabrook23} />
    <Route path='sulenoor3' component={Sulenoor3} />
    <Route path='nooresul2' component={Nooresul2} />
    <Route path='tchowdhry13' component={Tchowdhry13} />
    <Route path='error1' component={Error1} />
  </Route>
);