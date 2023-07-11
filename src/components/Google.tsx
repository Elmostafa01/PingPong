import React from 'react';
import googleImg from '../images/google_logo.png';
import { auth } from '../utils/firebase';
import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';


const Google: React.FC = () => {
    const GoogleAuth = async () => {
        const provider = new GoogleAuthProvider();
        try {
          const result = await signInWithRedirect(auth, provider);
          console.log(result);
      
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <>
    <div className='Google-comp'>
        <button onClick={GoogleAuth} className='gauth'>
            <img src={googleImg} />
            <span></span>
            <p>Google</p>
        </button>
    </div>
    </>
  )
}

export default Google
