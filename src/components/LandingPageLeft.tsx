import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPageLeft: React.FC = () => {
  const navigate = useNavigate();

  const goToAuthenticationPage = () => {
    navigate('/authentication')
  }

  return (
    <div className='mid-left'>
      <div className="title">
        <h1>ping pong</h1>
      </div>
      <div className="text">
        <p>
        Experience the thrill of ping pong on your computer! Our game offers intuitive controls, realistic physics, and global competition. Test your skills now!
        </p>
      </div>
      <div className="btn-div">
      <button onClick={goToAuthenticationPage} className="btn">Let's Play</button>
      </div>
    </div>
  )
}

export default LandingPageLeft
