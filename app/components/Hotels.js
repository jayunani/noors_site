import React from 'react';
import Footer from './Footer.js';

class Hotels extends React.Component {
  render() {
    return (
      <div className='hotels-page'>
        <div className='hotels-title'>
          <img src='/img/bismillah8.png' className='bismallah'/>
          <div className='hotels'> Event Details </div>
        </div>
        <div className='hotels-content'>
          <MendhiDetails />
        </div>
      </div>
    );
  }
}

export default Hotels;