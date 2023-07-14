import React, { useEffect } from 'react';
import googleImg from '../images/google_logo.png';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, usersCollection } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const Google: React.FC = () => {
  const [user, loading] = useAuthState(auth);
  const route = useNavigate();

  const provider = new GoogleAuthProvider();
  const GoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      if (user) {
        const userDoc = doc(usersCollection, user.uid);
        const snapshot = await getDoc(userDoc);

        if (snapshot.exists()) {
          // User data exists, navigate to Dashboard
          route('/dashboard');
        } else {
          // User data doesn't exist, navigate to Register
          route('/register');
        }
      }
    } catch (error) {
      console.log('Google sign-in error:', error);
    }
  };

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
