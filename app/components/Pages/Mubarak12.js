import React from 'react';
import MendhiDetails from '../EventDetails/MendhiDetails.js';
import ShaadiDetails from '../EventDetails/ShaadiDetails.js';
import Footer from '../Footer.js';

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
          <div className='rsvp-form'>
            <div className='event-form'>
              <button className='form-title' data-toggle='collapse' data-target='.collapsed-form-mendhi'> 
                *click* to RSVP
              </button>
            <iframe
            className='collapsed-form-mendhi collapse collapsed-div'  src="https://docs.google.com/forms/d/e/1FAIpQLSfv3iZCR-V7SKazp5i3X6y7WzaiqpkpFO4ralTUI_dQC8MVuQ/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Mubarak12;