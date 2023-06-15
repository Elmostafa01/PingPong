import React from 'react'
import challenger from '../images/achievements/9-challenger.svg'

const CurrentAchievement = () => {
  return (
    <div className='current-achievement'>
      <div className="header">
        <p>current achievement</p>
      </div>
      <div className="achievement">
        <div className="symbol">
          <img src={challenger} alt="rank-symbol" />
        </div>
        <div className="symbol-text">
          <div className="title">
            <span>Faker!</span>
          </div>
          <div className="text">
            <p>
              Master of the Ping Pong Realm, 
              your unparalleled skills and dedication 
              have earned you the prestigious title in the game.
              Congratulations on your extraordinary achievement!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentAchievement
