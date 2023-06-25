import { useState} from 'react';
import { useLocation, Link } from 'react-router-dom';
import main from '../images/main.svg';
import profil from '../images/profil.svg';
import friends from '../images/friends.svg';
import history from '../images/history.svg';
import game from '../images/game.svg';
import chat from '../images/newchat.svg';
import logo from '../images/logo.svg';


const Sidebar: React.FC = () => {
    const location = useLocation();

    const [closeMenu, setCloseMenu] = useState(true);

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    }

  return (
    <div className={closeMenu === false ? 'sidebar' : 'sidebar active'}>
        <div className={closeMenu === false ? 'logoContainer' : 'logoContainer active'}>
            <img className='logo' height={70} src={logo}  alt='logo' />
        </div>
        <div className={closeMenu === false ? 'burgerContainer' : 'burgerContainer active'}>
            <div className="burgerTrigger"
             onClick={()=>{
                handleCloseMenu()
                }}>
             </div>
            <div className="burgerMenu"></div>
        </div>
        <div className="linksContainer">
            <ul>
                <li className={location.pathname === '/' ? 'active' : ''}>
                  <Link className='Link' to="/">
                     <img className='dashboardIcon' height={22} alt='mainboard' src={main} />
                     <span className='span'>Home</span>
                     <div className="stroke"></div>
                  </Link>
                </li>
                <li className={location.pathname === '/profil' ? 'active' : ''}>
                  <Link className='Link' to="/profil">
                     <img className='profilIcon' height={22} alt='profil' src={profil} />
                     <span className='span'>Profil</span>
                     <div className="stroke"></div>
                  </Link>
                </li>
                <li className={location.pathname === '/friends' ? 'active' : ''}>
                  <Link className='Link' to="/friends">
                     <img className='friendsIcon' height={22} alt='friends' src={friends} />
                     <span className='span'>Friends</span>
                     <div className="stroke"></div>
                  </Link>
                </li>
                <li className={location.pathname === '/history' ? 'active' : ''}>
                  <Link className='Link' to="/history">
                     <img className='historyIcon' height={22} alt='history' src={history} />
                     <span className='span'>History</span>
                     <div className="stroke"></div>
                  </Link>
                </li>
                <li className={location.pathname === '/game' ? 'active' : ''}>
                  <Link className='Link' to="/game">
                     <img className='gameIcon' height={22} alt='game' src={game} />
                     <span className='span'>Game</span>
                     <div className="stroke"></div>
                  </Link>
                </li>
                <li className={location.pathname === '/chat' ? 'active' : ''}>
                  <Link className='Link' to="/chat">
                     <img className='chatIcon' height={22} alt='chat' src={chat} />
                     <span className='span'>Chat</span>
                     <div className="stroke"></div>
                  </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
