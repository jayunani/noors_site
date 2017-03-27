import React from 'react';
import MendhiDetails from '../EventDetails/MendhiDetails.js';
import Footer from '../Footer.js';

class Henna1 extends React.Component {
  render() {
    return (
      <div className='page'>
        <div className='title'>
          <img src='/img/bismillah8.png' className='bismallah'/>
          <div className='event'> Event Details </div>
        </div>
        <div className='event-content'>
          <MendhiDetails />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Henna1;