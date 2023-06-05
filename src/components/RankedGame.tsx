import React from 'react'
import players from '../images/players.jpg'


const RankedGame = () => {
  return (
    <div className='RankedGame'>
      <div className="rankedGameWrapper">
        <div className="title">
          <h3>Game</h3>
        </div>
        <div className="btn">
          <button>PLAY</button>
        </div>
        <div className="image">
          <img src={players} alt="" />
        </div>
      </div>
    </div>
  )
}

export default RankedGame
