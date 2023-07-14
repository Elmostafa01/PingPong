import ChangingProfilHolder from '../components/ChangingProfilHolder'
import LevelAvatar from '../components/LevelAvatar'
import LevelXp from '../components/LevelXp'
import RankXp from '../components/RankXp'
import CurrentAchievement from '../components/CurrentAchievement'
import Achievements from '../components/Achievements'
//import useRequireAuth from '../hooks/useRequireAuth'


const Profil = () => {
 // useRequireAuth() 

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
            <LevelXp />
            <RankXp />
            <CurrentAchievement />
          </div>
        </div>
        <Achievements />
      </div>
    </div>
  )
}

export default Profil
