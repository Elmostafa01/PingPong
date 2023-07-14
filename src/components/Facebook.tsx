import { FaFacebookF } from "react-icons/fa";
import React from 'react';
import { signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { auth } from "../utils/firebase";


const Facebook: React.FC = () => {

  const provider = new FacebookAuthProvider()
  const facebookAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
        <div className='Facebook-comp'>
            <button onClick={facebookAuth} className='fauth'>
                <FaFacebookF className='facebook' />
                <span></span>
                <p>Facebook</p>
            </button>
        </div>
    </>
  )
}

export default Facebook
