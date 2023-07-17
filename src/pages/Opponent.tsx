import React, { useState } from 'react';
import ChangingProfilHolderOpponent from '../components/ChangingProfilHolderOpponent'
import OpponentLevelAvatar from '../components/OpponentLevelAvatar'
import LevelXp from '../components/LevelXp'
import RankXp from '../components/RankXp'
import OpponentCurrentAchievement from '../components/OpponentCurrentAchievement'
import Achievements from '../components/Achievements'

const Opponent: React.FC = () => {
  const [xpLevel, setXpLevel] = useState(20);
  const [xpRank, setXpRank] = useState(60);

    /*Logic for adding points when winning*/
    const winGame = () => {
      setXpLevel(prevXpLevel => prevXpLevel + 10);
      setXpRank(prevXp => prevXp + 10);
    };

  return (
    <div className='Opponent'>
      <div className="wrapper">
        <div className="profil-card">
          <div className="top-header">
              <div className="title">
                <h1>Profil</h1>
              </div>
              <ChangingProfilHolderOpponent /> 
          </div>
          <div className="content">
            <OpponentLevelAvatar />
            <LevelXp xpLevel={xpLevel} />
            <RankXp xpRank={xpRank} />
            <OpponentCurrentAchievement />
          </div>
        </div>
        <Achievements />
      </div>
    </div>
  )
}

export default Opponent
