import React from 'react'
import menone from '../images/menone.svg';
import girlone from '../images/girlone.svg';



const YourLastMatch = () => {
  return (
    <div className='YourLastMatch'>
      <div className="card">
        <div className="card-content">
          <div className="title">
            <h3>✨Your Last match✨</h3>
          </div>
          <div className="content">
            <div className="leftPlayer">
                <div className="names">
                  <p>AYA11.</p>
                  <span>Silver</span>
                </div>
                <div className="avatar">
                  <img height={90} src={girlone} alt="girlAvatar" />
                </div>
            </div>
            <div className='dots'>
              <span className='vs'></span>
              <span className='vs'></span>
            </div>
            <div className="rightPlayer">
                <div className="avatar">
                  <img height={90} src={menone} alt="menAvatar" />
                </div>
              <div className="names">
                  <p>SIMO9.</p>
                  <span>Silver</span>
              </div>
            </div>
          </div>
        </div>
        <div className="left"><span>WIN</span></div>
        <div className="right"><span>LOSE</span></div> 
      </div>
    </div>
  )
}

export default YourLastMatch
