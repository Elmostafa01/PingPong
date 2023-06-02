import { useState} from 'react';;
import notification from '../images/notification.svg';
import searchbar from '../images/searchbar.svg';
import menone from '../images/menone.svg';


const Navbar = () => {

    const [expand, setExpand] = useState(false)

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
                <div className="notification">
                    <span className='notification-Number'>2</span>
                    <img height={20} alt='notification' src={notification} />
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
