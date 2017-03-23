import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Henna1 from './components/Pages/Henna1';
import Mubarak12 from './components/Pages/Mubarak12';
import Sajna123 from './components/Pages/Sajna123';
import Mabrook23 from './components/Pages/Mabrook23';
import Sulenoor3 from './components/Pages/Sulenoor3';
import Nooresul2 from './components/Pages/Nooresul2';
import Tchowdhry13 from './components/Pages/Tchowdhry13';
import Error1 from './components/Error1';
import Hotels from './components/Hotels';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='hottamales' component={Henna1} />
    <Route path='kashmirichai' component={Mubarak12} />
    <Route path='sajna' component={Sajna123} />
    <Route path='ucsd' component={Mabrook23} />
    <Route path='noorethaoos' component={Sulenoor3} />
    <Route path='562925' component={Nooresul2} />
    <Route path='villagepizza' component={Tchowdhry13} />
    <Route path='hotels245' component={Hotels} />
    <Route path='error1' component={Error1} />
  </Route>
);