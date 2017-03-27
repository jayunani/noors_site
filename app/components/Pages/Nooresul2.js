import React from 'react';
import ShaadiDetails from '../EventDetails/ShaadiDetails.js';
import Footer from '../Footer.js';

class Nooresul2 extends React.Component {
  render() {
    return (
      <div className='nooresul2-page'>
        <div className='nooresul2-title'>
          <img src='/img/bismillah8.png' className='bismallah'/>
          <div className='event-details'> Event Details </div>
        </div>
        <div className='nooresul2-content'>
          <ShaadiDetails />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Nooresul2;