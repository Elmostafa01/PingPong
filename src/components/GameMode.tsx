import PlayVsBot from '../components/PlayVsBot'
import PlayVsPlayer from '../components/PlayVsPlayer'


const GameMode = () => {
  return (
    <div className='game-modes'>
        <PlayVsBot />
        <PlayVsPlayer />
    </div>
  )
}

export default GameMode
