import React from 'react';
import ShaadiDetails from './ShaadiDetails.js';
import ValimaDetails from './ValimaDetails.js';

class Mabrook23 extends React.Component {
  render() {
    return (
      <div className='mabrook23-page'>
        <div className='mabrook23-title'>
          <img src='/img/bismillah8.png' className='bismallah'/>
          <div className='event-details'> Event Details </div>
        </div>
        <div className='mabrook23-content'>
          <ShaadiDetails />
          <ValimaDetails />
        </div>
      </div>
    );
  }
}

export default Mabrook23;