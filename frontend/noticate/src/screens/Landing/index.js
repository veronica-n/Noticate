import React from 'react';
import Logo from '../../assets/LandingBooks.png';
import Blob1 from '../../assets/Component1.png';
import Blob2 from '../../assets/Component2.png';
import Blob3 from '../../assets/Component3.png';
import { GoogleLogin } from 'react-google-login';
import './index.css';

function Landing() {
  
  function loginSuccess(res) {
    console.log("Login successful");
    window.location.href = "./feed";
  }

  function loginFailure(res) {
    console.log("Login Failed");
    console.log(res);
  }

  return (
    <div>
      <img src = {Blob1} alt="blob1" style={{ position: 'absolute' }}/>
      <img src = {Blob2} alt="blob2" style={{ position: 'absolute', left: '50%', marginTop: '38.5%', marginBottom: 0 }}/>
      <img src = {Blob3} alt="blob3" style={{ position: 'absolute', right: '0%' }} />

      <div style={{ position: 'absolute', top: '10%', left: '40%', textAlign: 'center' }} >
        <img src = {Logo} alt="logo" style={{}} />
        <h1 font = 'Playfair Display' style ={{ marginTop: -30, color: '#48536A', fontSize: 50}}>Noticate </h1>
        <GoogleLogin
          clientId='1072009986202-bj557860kagjt30ti31vcfgf8heeoprg.apps.googleusercontent.com'
          buttonText="Log In"
          onSuccess={loginSuccess}
          onFailure={loginFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      </div>
    </div>
  );
}

export default Landing;
