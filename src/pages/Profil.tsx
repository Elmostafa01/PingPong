import React, { useState, ChangeEvent } from 'react';
import ChangingProfilHolder from '../components/ChangingProfilHolder';
import LevelAvatar from '../components/LevelAvatar';
import LevelXp from '../components/LevelXp';
import RankXp from '../components/RankXp';
import CurrentAchievement from '../components/CurrentAchievement';
import Achievements from '../components/Achievements';

const Profil: React.FC = () => {
  const [xpLevel, setXpLevel] = useState(75);
  const [xpRank, setXpRank] = useState(30);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [username, setUsername] = useState('SIMO09');


  /*use winGame Logic for adding point % when winning at the right time*/
  const winGame = () => {
    setXpLevel((prevXpLevel) => prevXpLevel + 10);
    setXpRank((prevXp) => prevXp + 10);
  };

  const handleImageUpload = (file: File) => {
    setUploadedImage(file);
  };

  const handleNameChange = (newName: string) => {
    setUsername(newName);
  };

  return (
    <div className="profil">
      <div className="wrapper">
        <div className="profil-card">
          <div className="top-header">
            <div className="title">
              <h1>Profil</h1>
            </div>
            <ChangingProfilHolder onImageUpload={handleImageUpload} onNameChange={handleNameChange} />
          </div>
          <div className="content">
            <LevelAvatar uploadedImage={uploadedImage} username={username} />
            <LevelXp xpLevel={xpLevel} />
            <RankXp xpRank={xpRank} />
            <CurrentAchievement />
          </div>
        </div>
        <Achievements />
      </div>
    </div>
  );
};

export default Profil;
