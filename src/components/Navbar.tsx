import React, { useState } from 'react';
import notification from '../images/notification.svg';
import searchbar from '../images/searchbar.svg';
import menone from '../images/menone.svg';
import { PiSignOutFill } from "react-icons/pi";
import useClickOutside from '../hooks/useClickOutside';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [expand, setExpand] = useState<boolean>(false);
  const [notificationActive, setNotificationActive] = useState<boolean>(false);
  const [isSignoutVisible, setIsSignoutVisible] = useState<boolean>(false);

  const navigate = useNavigate()

  const handleExpand = () => {
    setExpand(!expand);
  };

  const toggleNotification = () => {
    setNotificationActive(!notificationActive)
  };

  const searchContainerRef = useClickOutside(() => {
    setExpand(false);
  });

  const notificationContainerRef = useClickOutside(() => {
    setNotificationActive(false);
  });


  const handleAvatarClick = () => {
    setIsSignoutVisible(!isSignoutVisible);
  };

  const handleSignOut = () => {
    auth.signOut().then(() => {
      console.log('User signed out successfully.');
      navigate('/')

    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="navbar">
      <div className="navWrapper">
        <div className={`searchContainer ${expand ? 'active' : ''}`} ref={searchContainerRef} >
          <input className="input" type="text" placeholder="Look for Players..." />
          <div className="img" onClick={handleExpand}>
            <img height={20} alt="searchbar" src={searchbar} />
          </div>
        </div>
        <div className="notificationContainer" ref={notificationContainerRef} onClick={toggleNotification}>
          <div className="notification">
            <div className="notification-Number">16</div>
            <button>
              <img height={20} alt="notification" src={notification} />
            </button>
            <div className={`dropdown ${notificationActive ? 'active' : ''}`}>
              <p>
                you have <span>12</span> Friend request...
              </p>
              <p>
                you have <span>4</span> unread messages...
              </p>
            </div>
          </div>
        </div>
        <div className="avatarContainer">
          <div className={`avatar ${isSignoutVisible ? 'active' : ''}`}
           onClick={handleAvatarClick}>
            <img className="rasta" height={52} alt="avatar" src={menone} />
          </div>
          <button 
            className={`signout ${isSignoutVisible ? 'visible' : ''}`}
            onClick={handleSignOut}
          ><PiSignOutFill />Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
