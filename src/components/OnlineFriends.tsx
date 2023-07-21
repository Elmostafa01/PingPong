import menone from '../images/menone.svg';
import mentwo from '../images/mentwo.svg';
import girone from '../images/girlone.svg';
import girltwo from '../images/girltwo.svg';
import sendchat from '../images/sendchat.svg';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';

interface Contact {
  name: string;
  statut: string;
  image: string;
  message: string; // Add a new property to store the message
}

const allFriendsData: Contact[] = [
  {
    name: 'Zetrix',
    statut: 'In Game',
    image: mentwo,
    message: '',
  },
  {
    name: 'Nobles',
    statut: 'In Game',
    image: girltwo,
    message: '',
  },
  {
    name: 'Bilal',
    statut: 'Free',
    image: menone,
    message: '',
  },
  {
    name: 'Phoenix',
    statut: 'In Game',
    image: girone,
    message: '',
  },
  {
    name: 'Phen',
    statut: 'Free',
    image: menone,
    message: '',
  },
  {
    name: 'Salah',
    statut: 'Free',
    image: mentwo,
    message: '',
  },
  {
    name: 'Khalid',
    statut: 'Free',
    image: menone,
    message: '',
  },
  {
    name: 'Craziman',
    statut: 'In Game',
    image: mentwo,
    message: '',
  },
  {
    name: 'Tofaha',
    statut: 'Free',
    image: girone,
    message: '',
  },
  {
    name: 'Ohio',
    statut: 'In Game',
    image: mentwo,
    message: '',
  },
  {
    name: 'Strawberry',
    statut: 'In Game',
    image: girltwo,
    message: '',
  },
  {
    name: 'Numnum',
    statut: 'Free',
    image: menone,
    message: '',
  },
];

const OnlineFriends: React.FC = () => {
  const [friendsData, setFriendsData] = useState<Contact[]>(allFriendsData);
  const [hasText, setHasText] = useState(false); 

  const clearField = () => {
    setFriendsData((prevData) => prevData.map((friend) => ({ ...friend, message: '' })));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newMessage = event.target.value;
    setFriendsData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index].message = newMessage;
      return updatedData;
    });
    setHasText(newMessage.trim().length > 0); 
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Enter') {
      notify();
      clearField();
    }
  };

  const notify = () => {
    if (hasText) { 
      toast.success('Message has been sent.', {
        position: 'top-center',
        duration: 1200,
        style: {
          zIndex: '900',
          background: '#333',
          color: '#fff',
          boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)',
          fontFamily: "'Poppins', sans-serif",
          fontSize: '0.9rem'
        },
      });
    }
  };

  return (
    <div className='OnlineFriends'>
        <Toaster />
      <div className='title'>
        <h3>✨Friends✨</h3>
      </div>
      <div className='cards-wrapper'>
        {friendsData.length > 0 ? (
          friendsData.map((card, i) => (
            <div className='card-friend' key={i}>
              <div className='friend'>
                <div className='avatar'>
                  <span className={card.statut === 'In Game' ? 'occupied' : 'online'}></span>
                  <img src={card.image} alt='friend image' height={60} />
                </div>
                <div className='card-name'>
                  <span className='name'>{card.name}</span>
                  <span className='ingame'>{card.statut}</span>
                </div>
              </div>
              <div className='send-msg'>
                <input
                  type='text'
                  placeholder='Send a Msg . . .'
                  onChange={(event) => handleChange(event, i)}
                  value={card.message}
                  onKeyPress={(event) => handleKeyPress(event, i)}
                />
                <div className='sendchat' onClick={() => { notify(); clearField(); }}>
                  <button>
                    <img src={sendchat} alt='send chat' />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='friends-off'>No Friend Online</p>
        )}
      </div>
    </div>
  );
};

export default OnlineFriends;
