import React from 'react';
import MendhiDetails from '../EventDetails/MendhiDetails.js';
import ShaadiDetails from '../EventDetails/ShaadiDetails.js';

class Mubarak12 extends React.Component {
  render() {
    return (
      <div className='page'>
        <div className='title'>
          <img src='/img/bismillah8.png' className='bismallah'/>
          <div className='event-details'> Event Details </div>
        </div>
        <div className='event-content'>
          <MendhiDetails />
          <ShaadiDetails />
        </div>
      </div>
    );
  }
}

export default Mubarak12;