import React from 'react'
import ChangingProfilHolder from '../components/ChangingProfilHolder'
import OpponentLevelAvatar from '../components/OpponentLevelAvatar'
import LevelXp from '../components/LevelXp'
import RankXp from '../components/RankXp'
import OpponentCurrentAchievement from '../components/OpponentCurrentAchievement'
import Achievements from '../components/Achievements'

const Opponent: React.FC = () => {
  return (
    <div className='Opponent'>
      <div className="wrapper">
        <div className="profil-card">
          <div className="top-header">
              <div className="title">
                <h1>Profil</h1>
              </div>
              <ChangingProfilHolder /> 
          </div>
          <div className="content">
            <OpponentLevelAvatar />
            <LevelXp />
            <RankXp />
            <OpponentCurrentAchievement />
          </div>
        </div>
        <Achievements />
      </div>
    </div>
  )
}

export default Opponent
