import React from 'react';
import ShaadiDetails from '../EventDetails/ShaadiDetails.js';
import ValimaDetails from '../EventDetails/ValimaDetails.js';
import Footer from '../Footer.js';

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
        <Footer />
      </div>
    );
  }
}

export default Mabrook23;