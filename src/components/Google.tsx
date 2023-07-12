import React, { useEffect } from 'react';
import googleImg from '../images/google_logo.png';
import { auth } from '../utils/firebase';
import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Google: React.FC = () => {
  const navigate = useNavigate();

  const GoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithRedirect(auth, provider);
      console.log(result);
    } catch (error) {
      console.log('Google sign-in error:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/dashboard');
      } if (!user) {
        navigate('/authentication')
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="Google-comp">
      <button onClick={GoogleAuth} className="gauth">
        <img src={googleImg} />
        <span></span>
        <p>Google</p>
      </button>
    </div>
  );
};

export default Google;