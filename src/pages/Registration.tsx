import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import leftimage from '../images/backgrounds/img-3.png';
import menone from '../images/icons/m-1.png';
import mentwo from '../images/icons/m-2.png';
import girlone from '../images/icons/g-1.png';
import girltwo from '../images/icons/g-2.png';
import { addDoc, getDoc, doc } from 'firebase/firestore';
import { db, auth, usersCollection } from '../utils/firebase';

interface image {
  image: string;
  id: number;
}

const images: image[] = [
  {
    image: menone,
    id: 1,
  },
  {
    image: mentwo,
    id: 2,
  },
  {
    image: girlone,
    id: 3,
  },
  {
    image: girltwo,
    id: 4,
  }
]

const Registration: React.FC = () => {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDoc = doc(db, 'users', user.uid);
        const snapshot = await getDoc(userDoc);
        const userData = snapshot.data();

        if (userData && userData.username) {
          localStorage.setItem('userId', JSON.stringify(user.uid));
          navigate('/dashboard');
        }
      }
    });

    return () => {
      unregisterAuthObserver();
    };
  }, [navigate]);

  const handleSelectedImage = (id: number) => {
    setSelectedImageId(id);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      setIsLoading(true); 
  
      if (username.length < 4 || username.length > 10 || /[@$!_%*?&]/.test(username)) {
        alert('Username must be between 4 and 10 characters long and cannot contain special characters.');
        setIsLoading(false);
        return;
      }
  
      const user = auth.currentUser;
      if (!user) {
        throw new Error('User not authenticated');
      }
  
      await addDoc(usersCollection, {
        uid: user.uid,
        username,
        photoURL: selectedImageId !== null ? images.find(image => image.id === selectedImageId)?.image : undefined,
        registrationComplete: true,
        level: 1,
        rank: "iron"
      });
  
      window.localStorage.setItem('userId', user.uid);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className='Registration'>
      <div className="register-component">
        <div className="hero-img">
          <img src={leftimage} alt="background" />
        </div>
        <div className="user-choice">
          <div className="text">
            <p>Hey,</p>
            <p>let's get you started</p>
            <p>choose your avatar</p>
          </div>
          <div className="icons">
            <ul>
              {images.map((image) => (
                <li key={image.id} className={selectedImageId === image.id ? 'selected' : ''}>
                  <img
                    src={image.image}
                    alt=""
                    onClick={() => handleSelectedImage(image.id)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="enter-username">
              <input 
              type="text" placeholder='username' 
              value={username} onChange={(e) => setUsername(e.target.value)}
               />
              <button type='submit' 
                      disabled={!selectedImageId || !username || isLoading}>
                      {isLoading ?
                       (                      
                       <span className='loader'></span>                   
                      ) 
                      : 'Register'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration