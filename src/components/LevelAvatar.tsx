import React from 'react'
import menone from '../images/menone.svg'

const LevelAvatar = () => {
  const statut = {
    level: 11,
    username: 'SIMO09',
    rank: 'Silver'
  };

  return (
    <div className='level-avatar'>
      <div className="level">
        <span>LVL {statut.level}</span>
      </div>
      <div className="avatar">
        <img src={menone} alt="avatar" />
      </div>
      <div className="labels">
        <div className="name">
          <p>USERNAME</p>
          <span>{statut.username}</span>
        </div>
        <div className="rank">
          <p>RANK</p>
          <span>{statut.rank}</span>
        </div>
      </div>
    </div>
  )
}

export default LevelAvatar
