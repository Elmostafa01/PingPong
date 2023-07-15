import React, { useState } from 'react';
import ChangingProfilHolder from '../components/ChangingProfilHolder';
import LevelAvatar from '../components/LevelAvatar';
import LevelXp from '../components/LevelXp';
import RankXp from '../components/RankXp';
import CurrentAchievement from '../components/CurrentAchievement';
import Achievements from '../components/Achievements';

const Profil: React.FC = () => {
  const [xpLevel, setXpLevel] = useState(60);
  const [xpRank, setXpRank] = useState(30);

  /*Logic for adding point % when winning*/
  const winGame = () => {
    setXpLevel(prevXpLevel => prevXpLevel + 10);
    setXpRank(prevXp => prevXp + 10);
  };

  return (
    <div className='profil'>
      <div className="wrapper">
        <div className="profil-card">
          <div className="top-header">
            <div className="title">
              <h1>Profil</h1>
            </div>
            <ChangingProfilHolder />
          </div>
          <div className="content">
            <LevelAvatar />
            <LevelXp xpLevel={xpLevel} />
            <RankXp xpRank={xpRank} />
            <CurrentAchievement />
          </div>
        </div>
        <Achievements />
      </div>
    </div>
  );
};

export default Profil;
