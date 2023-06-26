import bgplayer from '../images/bgplayer.svg';
import GameMode from '../components/GameMode';


const Game = () => {
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
