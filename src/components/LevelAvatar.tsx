import React, { useState} from 'react';
import menone from '../images/menone.svg';

interface LevelAvatarProps {
  uploadedImage: File | null;
  username: string;
}

const LevelAvatar: React.FC<LevelAvatarProps> = (props) => {
  const statut = {
    level: 18,
    username: 'SIMO09',
    rank: 'Faker',
  };

  return (
    <div className="level-avatar">
      <div className="level">
        <span>LVL {statut.level}</span>
      </div>
      <div className="avatar">
        {props.uploadedImage ? (
          <img className='new-image' src={URL.createObjectURL(props.uploadedImage)} alt="avatar" />
        ) : (
          <img src={menone} alt="avatar" />
        )}
      </div>
      <div className="labels">
        <div className="name">
          <p>USERNAME</p>
          <span>{props.username}</span>
        </div>
        <div className="rank">
          <p>RANK</p>
          <span>{statut.rank}</span>
        </div>
      </div>
    </div>
  );
};

export default LevelAvatar;
