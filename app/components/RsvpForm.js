import React from 'react';

class RsvpForm extends React.Component {
  render() {
    return (
      <div className='rsvp-form'>
        <div className='event-form'>
          <button className='form-title' data-toggle='collapse' data-target='.collapsed-form'> *click* to RSVP</button>
            <form className='collapsed-form collapse collapsed-div'>
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
    );
  }
}

export default RsvpForm;