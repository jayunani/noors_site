import React from 'react';

class Henna1 extends React.Component {
  render() {
    return (
      <div className='henna1-page'>
        <div className='henna1-title'>
          Nikkah and Mendhi Ceremonies
        </div>
        <div className='henna1-header'> Join Ibrahim, Shoaib, and Zaynab for the Nikkah and Mendhi ceremonies! </div>
        <div className='henna1-content'>
          <div className='event-details'>
            <div className='event-details-title'> EVENT DETAILS </div>
            <div className='event-address'> 
              <div className='address-title'> Address </div>
              <div classNAme='address-name'> Diamond Bar Center </div>
              <div className='address-number'> 1600 Grand Ave. </div>
              <div classNAme='address-city'> Diamond Bar, CA </div>
            </div>
            <div className='event-schedule'>
              <div> Schedule </div>
              <div> 5 PM: Ladies Only </div>
              <div> 6:30 PM: All Guests </div>
            </div>
            <div className='event-schedule'> 
            </div>
          </div>
          <div className='event-form'>
            <div className='form-title'> RSVP Form </div>
            <form>
              <input className='form-first-name' placeholder='First Name' />
              <br/>
              <input className='form-last-name' placeholder='Last Name' />
              <br/>
              <input className='form-email' placeholder='Email' />
              <br/>
              <input className='form-event' placeholder='Event' />
              <br/>
              <input className='form-number-attending' placeholder='# attending' />
              <br/>
              <input className='form-attendance-names' placeholder='Names of those attending' />
              <br/>
              <input className='form-message' placeholder='Message for the bride and groom?' />
              <br/>
              <input className='form-submit' type='submit' value='Save me a plate!' />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Henna1;