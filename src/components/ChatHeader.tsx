import React, {useState} from 'react'
import { IoIosArrowBack } from "react-icons/io";
import mentwo from '../images/mentwo.svg'
import { BsFillChatTextFill } from "react-icons/bs";


interface Contact {
  name: string;
  lastMsg: string;
  image: string;
  message: string;
  msgNumber: number;
}


interface ChatHeaderProps {
  selectedContact: Contact | null;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ selectedContact }) => {
  const [onlineStatus, setOnlineStatus] = useState('Offline');

  if (!selectedContact) {
    return (
      <div className='contact-notSelected'>
        <BsFillChatTextFill />
      </div>
    );
  }

  return (
    <div className='chat-header'>
      <div className="left-side">
        <div className="goback">
            <IoIosArrowBack style={{transform: 'scale(1.6)'}} />            
        </div>
        <div className="avatar">
            <span></span>
            <img src={selectedContact.image} alt="" />
        </div>
        <div className="name-state-label">
            <p>{selectedContact.name}</p>
            <span>Online</span>
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
