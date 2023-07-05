import React from 'react'
import Intra from '../components/Intra'
import Google from '../components/Google'
import arrowLeft from '../images/arrow-left.svg'
import hero from '../images/SVG-HERO.svg'

const Authentication: React.FC = () => {
  return (
    <div className='Authentincation-page'>
      <div className="authentication">
        <h2>welcome 👋</h2>
        <p>Please log in with</p>
        <Intra />
        <div className="line-seperated">
          <span></span>
          <p>Or</p>
          <span></span>
        </div>
        <Google />
        <div className="goback">
          <button className='back'>
            <img src={arrowLeft} />
          </button>
          <p>Go Back</p>
        </div>
      </div>
      <div className="hero-img">
        {/*<img src={hero} height={400} />*/}
      </div>
    </div>
  )
}

export default Authentication
