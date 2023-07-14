import React, { useEffect } from 'react';
import googleImg from '../images/google_logo.png';
import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, usersCollection, } from '../utils/firebase';


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
    const unregisterAuthObserver = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = doc(usersCollection, user.uid);
        const snapshot = await getDoc(userDoc);

        if (snapshot.exists()) {
          // User data exists, navigate to Dashboard
          navigate('/dashboard');
        } else {
          // User data doesn't exist, navigate to Register
          navigate('/register');
        }
      }
    });

    return () => {
      unregisterAuthObserver();
    };
  }, [navigate]);


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