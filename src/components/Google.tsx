import React, { useEffect, useState } from 'react';
import googleImg from '../images/google_logo.png';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Google: React.FC = () => {
  const route = useNavigate();
  const [userAuth, setUserAuth] = useState<string>('');

  const provider = new GoogleAuthProvider();
  const GoogleAuth = async () => {
    try {
      const userAuth = await signInWithPopup(auth, provider);
      //console.log(userAuth.user);

      const userId = localStorage.getItem('userId');
      if (userId) {
        route('/dashboard');
      } if(!userId) {
        route('/register')
      } 
      
      setUserAuth(userAuth.user.uid);
    } catch (error) {
      console.log('Google sign-in error:', error);
    }
  };

  useEffect(() => {
    // Store user ID in local storage
    localStorage.setItem('userId', JSON.stringify(userAuth));
  }, [userAuth]);

  return (
    <div className="Google-comp">
      <button onClick={GoogleAuth} className="gauth">
        <img src={googleImg} alt="Google Logo" />
        <span></span>
        <p>Google</p>
      </button>
    </div>
  );
};

export default Google;
