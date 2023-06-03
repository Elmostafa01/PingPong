import { useState} from 'react';;
import notification from '../images/notification.svg';
import searchbar from '../images/searchbar.svg';
import menone from '../images/menone.svg';


const Navbar = () => {

    const [expand, setExpand] = useState(false)
    const [notifiActive, setNotifiActive] = useState(false);

    const handleNotfication = () => {
        setNotifiActive(!notifiActive)
        console.log(notifiActive)
    }

    const handleExpand = () => {
        setExpand(!expand)
        console.log(expand)
    }

  return (
    <div className='navbar'>
        <div className="navWrapper">
            <div  className={expand === false ? 'searchContainer' : 'searchContainer active'}>
                <input className='input' type='text' placeholder='Look for Players...' />
                <div className="img" onClick={()=>{handleExpand()}}>
                    <img height={20} alt='searchbar' src={searchbar} />
                </div>
            </div>
            <div className="notificationContainer">
                <div className="notification" onClick={handleNotfication}>
                    <div className='notification-Number'>16</div>
                    <button>
                        <img height={20} alt='notification' src={notification} />
                    </button>
                    <div className={notifiActive === false ? 'dropdown' : 'dropdown active'}>
                        <p>you have <span>12</span> Friend request...</p>
                        <p>you have <span>4</span> unread messages...</p>
                    </div>
                </div>               
            </div>
            <div className="avatarContainer">
                <div className="avatar">
                    <img className='rasta' height={52} alt='avatar' src={menone} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
