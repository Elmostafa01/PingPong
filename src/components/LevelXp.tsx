import React from 'react'

const LevelXp: React.FC = () => {
  return (
    <div className='level-xp'>
      <div className="levelxp-label">
        <p>LEVEL XP</p>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill"></div>
      </div>    
      <div className="percent">30%</div>
    </div>
  )
}

export default LevelXp
