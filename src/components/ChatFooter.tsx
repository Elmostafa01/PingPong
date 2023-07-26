import React, { useState } from 'react';
import { RiSendPlaneFill } from "react-icons/ri";

interface Contact {
  name: string;
  lastMsg: string;
  image: string;
  message: string;
  msgNumber: number;
}


interface ChatFooterProps {
  selectedContact: Contact | null;
  onSendMessage: (message: string) => void;
}

const ChatFooter: React.FC<ChatFooterProps> = ({ selectedContact, onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedContact && message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className='chat-footer'>
      <div className='input-field'>
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <input
              type='text'
              placeholder='Type Something Here...'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type='submit'>
            <RiSendPlaneFill style={{ transform: 'scale(1.2)' }} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatFooter
