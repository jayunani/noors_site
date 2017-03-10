import React from 'react';

class Henna1 extends React.Component {
  render() {
    return (
      <div className='henna1-page'>
        <div className='henna1-title'>
          Join Ibrahim, Shoaib, and Zaynab for the Nikkah and Mendhi ceremonies! 
        </div>
        <div className='henna1-content'>
        <div className='event-details'>
          EVENT DEETS HERE
        </div>
        <form>
          <input className='form-first-name' placeholder='First Name' />
          <input className='form-last-name' placeholder='Last Name' />
          <input className='form-email' placeholder='Email' />
          <input className='form-event' placeholder='Event' />
          <input className='form-number-attending' placeholder='# attending' />
          <input className='form-attendance-names' placeholder='Names of those attending' />
          <input className='form-message' placeholder='Message for the bride and groom?' />
          <input type='submit' value='Save my spot!' />
        </form>
        </div>
      </div>
    );
  }
}

export default Henna1;