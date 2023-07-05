import React from 'react'
import googleImg from '../images/google_logo.png'

const Google: React.FC = () => {
  return (
    <div className='Google-comp'>
      <button>
        <img src={googleImg} />
        <span></span>
        <p>Google</p>
      </button>
    </div>
  )
}

export default Google
