import React from 'react';
import MendhiDetails from './MendhiDetails.js';
import ShaadiDetails from './ShaadiDetails.js';
import RsvpForm from './RsvpForm.js';

class Mubarak12 extends React.Component {
  render() {
    return (
      <div className='mubarak12-page'>
        <div className='mubarak12-title'>
          <img src='/img/bismillah8.png' className='bismallah'/>
          <div className='event-details'> Event Details </div>
        </div>
        <div className='henna1-content'>
          <MendhiDetails />
          <ShaadiDetails />
          <RsvpForm />
        </div>
      </div>
    );
  }
}

export default Mubarak12;