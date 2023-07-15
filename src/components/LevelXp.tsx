import React, { useState } from 'react';

interface LevelXpProps {
  xpLevel: number;
}

const LevelXp: React.FC<LevelXpProps> = ({ xpLevel }) => {
  return (
    <div className='level-xp'>
      <div className="levelxp-label">
        <p>LEVEL XP</p>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${xpLevel}%` }}
        ></div>
      </div>
      <div className="percent">{xpLevel}%</div>
    </div>
  );
};

export default LevelXp;
