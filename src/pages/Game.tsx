import bgplayer from '../images/bgplayer.svg';
import GameMode from '../components/GameMode';
//import useRequireAuth from '../hooks/useRequireAuth'


const Game = () => {
 // useRequireAuth() 

  return (
    <div className='Game'>
      <div className="title">
        <h1>Game</h1>
      </div>
      <div className="game-component">
        <div className="game-image">
          <img src={bgplayer} alt="" />
        </div>
        <GameMode />
      </div>
    </div>
  )
}

export default Game
