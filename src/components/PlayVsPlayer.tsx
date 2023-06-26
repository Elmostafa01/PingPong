import playerVsPlayer from '../images/playerVsPlayer.svg';
import { Link } from 'react-router-dom';


const PlayVsPlayer = () => {
  return (
    <div className='vsPlayer'>
      <Link className='switcher' to=''>
        <img src={playerVsPlayer} alt='Play vs Bot'/>
        <p>Play VS Player</p>
      </Link>
    </div>
  )
}

export default PlayVsPlayer
