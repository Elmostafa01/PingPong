import React, { useState, ChangeEvent } from 'react';
import ChangingProfilHolder from '../components/ChangingProfilHolder';
import LevelAvatar from '../components/LevelAvatar';
import LevelXp from '../components/LevelXp';
import RankXp from '../components/RankXp';
import CurrentAchievement from '../components/CurrentAchievement';
import Achievements from '../components/Achievements';
import toast, { Toaster } from 'react-hot-toast';


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
    setTimeout(() => {
      setUploadedImage(file);
      toast.success('Image has been changed successfully.', {
        position: 'top-center',
        duration: 2000, 
        style: {
          zIndex: '900',
          background: '#333',
          color: '#fff',
          boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)',
          fontFamily: "'Poppins', sans-serif",
          fontSize: '0.9rem'
        },
      });
    },); 
  };

  const handleNameChange = (newName: string) => {
    setTimeout(() => {
      setUsername(newName);
      toast.success('Username has been changed successfully.', {
        position: 'top-center',
        duration: 2000, 
        style: {
          zIndex: '900',
          background: '#333',
          color: '#fff',
          boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)',
          fontFamily: "'Poppins', sans-serif",
          fontSize: '0.9rem'
        },
      });
    },);   };

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
