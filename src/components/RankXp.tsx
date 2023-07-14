import React from 'react'

const RankXp: React.FC = () => {
  return (
    <div className='rank-xp'>
      <div className="rankxp-label">
        <p>RANK XP</p>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill"></div>
      </div>    
      <div className="percent">80%</div>
    </div>
  )
}

export default RankXp
