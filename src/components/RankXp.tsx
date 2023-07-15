import React, {useState} from 'react'

interface RanklXpProps {
  xpRank: number;
}


const RankXp: React.FC<RanklXpProps> = ({xpRank}) => {
  return (
    <div className='rank-xp'>
      <div className="rankxp-label">
        <p>RANK XP</p>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill"
        style={{width: `${xpRank}%`}}
        >
        </div>
      </div>    
      <div className="percent">{xpRank}%</div>
    </div>
  )
}

export default RankXp
