import React from 'react'
import ChangingProfilHolderOpponent from '../components/ChangingProfilHolderOpponent'
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
              <ChangingProfilHolderOpponent /> 
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
