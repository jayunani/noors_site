import React from 'react';
import ValimaDetails from '../EventDetails/ValimaDetails.js';
import Footer from '../Footer.js';

class Sulenoor3 extends React.Component {
  render() {
    return (
      <div className='sulenoor3-page'>
        <div className='sulenoor3-title'>
          <img src='/img/bismillah8.png' className='bismallah'/>
          <div className='event-details'> Event Details </div>
        </div>
        <div className='sulenoor3-content'>
          <ValimaDetails />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Sulenoor3;