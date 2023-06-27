import React from "react";
import playerVsPlayer from '../images/playerVsPlayer.svg';

interface ChildProps {
  gamePlayer: boolean;
  handlePlayerGame: () => void;
}

const PlayVsPlayer: React.FC<ChildProps> = ({ gamePlayer, handlePlayerGame }) => {
  return (
    <div className='vsPlayer'>
      <button className='switcher' onClick={handlePlayerGame}>
        <img src={playerVsPlayer} alt='Play vs Player' />
        <p>Play VS Player</p>
      </button>
    </div>
  );
};

export default PlayVsPlayer;
