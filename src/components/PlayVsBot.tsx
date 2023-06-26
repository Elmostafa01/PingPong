import playerVsBot from '../images/playerVsBot.svg';
import { Link } from 'react-router-dom';

const PlayVsBot = () => {
  return (
    <div className='vsBot'>
      <Link className='switcher' to='/ToBot'>
        <img src={playerVsBot} alt='Play vs Bot'/>
        <p>Play VS Bot</p>
      </Link>
    </div>
  )
}

export default PlayVsBot
