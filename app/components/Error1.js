import React from 'react';

class Error1 extends React.Component {
  render() {
    let redirectToHome = (() => {
      window.location.replace('/')
    })
    return (
      <div className='error1-page'>
        <div className='error1-title'> Oops! Did you enter the wrong code? </div>
        <button onClick={redirectToHome}> Try again! </button>
      </div>
    );
  }
}

export default Error1;