import React from 'react';
import { FaFacebookF } from "react-icons/fa";


const Facebook: React.FC = () => {
  return (
    <>
        <div className='Facebook-comp'>
            <button className='fauth'>
                <FaFacebookF className='facebook' />
                <span></span>
                <p>Facebook</p>
            </button>
        </div>
    </>
  )
}

export default Facebook
