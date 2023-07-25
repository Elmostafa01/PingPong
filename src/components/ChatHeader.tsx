import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import mentwo from '../images/mentwo.svg'

const ChatHeader: React.FC = () => {
  return (
    <div className='chat-header'>
      <div className="left-side">
        <div className="goback">
            <IoIosArrowBack style={{transform: 'scale(1.6)'}} />            
        </div>
        <div className="avatar">
            <span></span>
            <img src={mentwo} alt="" />
        </div>
        <div className="name-state-label">
            <p>Zetrix</p>
            <span>Active Now</span>
        </div>
      </div>
      <div className="right-side">
        <div className="right-btn">
            <button>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
