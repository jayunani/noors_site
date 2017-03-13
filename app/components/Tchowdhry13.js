import React from 'react';
import MendhiDetails from './MendhiDetails.js';
import ValimaDetails from './ValimaDetails.js';

class Tchowdhry13 extends React.Component {
  render() {
    return (
      <div className='tchowdhry13-page'>
        <div className='tchowdhry13-title'>
          <img src='/img/bismillah8.png' className='bismallah'/>
          <div className='event-details'> Event Details </div>
        </div>
        <div className='tchowdhry13-content'>
          <MendhiDetails />
          <ValimaDetails />
        </div>
      </div>
    );
  }
}

export default Tchowdhry13;