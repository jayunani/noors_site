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
          {/*<img src='img/flower_line.png' />*/}
          Noor & Sulayman
          {/*<img src='img/flower_line.png' />*/}
          <div className='home-header-date'> ARE GETTING MARRIED! </div>  
        </div>
        <div className='home-body'>
          <form onSubmit={formSubmitHandler}> 
            <input type='text' placeholder='ENTER CODE HERE' ref='codeInput' className='code-input'/>
            <input type='submit' className='submit-btn' value='Go!'/>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;