import React from 'react';
import MendhiDetails from './MendhiDetails.js';
import ShaadiDetails from './ShaadiDetails.js';
import ValimaDetails from './ValimaDetails.js';
import Footer from './Footer.js';

class Sajna123 extends React.Component {
  render() {
    return (
      <div className='sajna123-page'>
        <div className='sajna123-title'>
          <img src='/img/bismillah8.png' className='bismallah'/>
          <div className='event-details'> Event Details </div>
        </div>
        <div className='sajna123-content'>
          <MendhiDetails />
          <ShaadiDetails />
          <ValimaDetails />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Sajna123;