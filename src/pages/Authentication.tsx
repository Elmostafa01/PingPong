import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import googleImg from '../images/google_logo.png';
import arrowLeft from '../images/arrow-left.svg'
import hero from '../images/SVG-HERO.svg'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';


const Authentication: React.FC = () => {
 const GoogleAuth = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithRedirect(auth, provider);
    console.log(result);

  } catch (error) {
    console.log(error);
  }
};

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
          <div className='Google-comp'>
            <button onClick={GoogleAuth} className='gauth'>
              <img src={googleImg} />
              <span></span>
              <p>Google</p>
            </button>
          </div>
          <div className="line-seperated">
            <span></span>
            <p>Or</p>
            <span></span>
          </div>
          <div className='Facebook-comp'>
            <button className='fauth'>
              <FaFacebookF className='facebook' />
              <span></span>
              <p>Facebook</p>
            </button>
          </div>
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
