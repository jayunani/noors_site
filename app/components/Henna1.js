import React from 'react';
import MendhiDetails from './MendhiDetails.js';

class Henna1 extends React.Component {
  render() {
    return (
      <div className='henna1-page'>
        <div className='henna1-title'>
          <img src='/img/bismillah8.png' className='bismallah'/>
          <div className='mendhi'> Event Details </div>
        </div>
        <div className='henna1-content'>
          <MendhiDetails />
        </div>
      </div>
    );
  }
}

export default Henna1;