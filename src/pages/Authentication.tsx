import React from 'react'
import Intra from '../components/Intra'
import Google from '../components/Google'
import arrowLeft from '../images/arrow-left.svg'
import hero from '../images/SVG-HERO.svg'
import { useNavigate } from 'react-router-dom';

const Authentication: React.FC = () => {
  const history = useNavigate();

  const goBack = () => {
    history('/');
  }

  return (
    <div className='Authentincation-page'>
      <div className="auth-component">
        <div className="auth-providers">
          <div className="text">
            <h2>welcome 👋</h2>
            <p>Please log in with</p>
          </div>
          <Intra />
          <div className="line-seperated">
            <span></span>
            <p>Or</p>
            <span></span>
          </div>
          <Google />
          <div className="goback">
            <button onClick={goBack} className='back'>
              <img src={arrowLeft} />
            </button>
            <p>Go Back</p>
          </div>
        </div>
        <div className="hero-img">
          <img src={hero} height={400} />
        </div>
      </div>
    </div>
  )
}

export default Authentication
