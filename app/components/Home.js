import React from 'react';

class Home extends React.Component {
  render() {
    let codes = ['henna1', 'mubarak12', 'sajna123', 'mabrook23', 'sulenoor3', 'nooresul2', 'tchowdhry13'];
    let formSubmitHandler = ((e) => {
      e.preventDefault();
      let codeValue = this.refs.codeInput.value;
      if(codes.includes(codeValue)) {
        window.location.replace(codeValue)
      } else {
        window.location.replace('error1')
      }
    })
    return (
      <div className='home-page'>
        <div className='home-title'>
          Noor & Sulayman
        </div>
        <form onSubmit={formSubmitHandler}> 
          <input type='text' placeholder='ENTER CODE HERE' ref='codeInput'/>
          <input type='submit' className='submit-btn' value='Go!'/>
        </form>
      </div>
    );
  }
}

export default Home;