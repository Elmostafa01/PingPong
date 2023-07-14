import React from 'react'
import players from '../images/players.jpg'
import { Link } from 'react-router-dom'


const RankedGame: React.FC = () => {
  return (
    <div className='RankedGame'>
      <div className="rankedGameWrapper">
        <div className="title">
          <h3>✨Game✨</h3>
        </div>
        <div className="btn">
          <Link to='/game'>
            <button>PLAY</button>
          </Link>
        </div>
        <div className="image">
          <img src={players} alt="" />
        </div>
      </div>
    </div>
  )
}

export default RankedGame
