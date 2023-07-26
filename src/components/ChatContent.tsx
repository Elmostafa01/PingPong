import React from 'react'

interface Contact {
  name: string;
  lastMsg: string;
  image: string;
  message: string;
  msgNumber: number;
}

interface Message {
  sender: string;
  message: string;
}

interface ChatContentProps {
  selectedContact: Contact | null;
  messages: Message[];
}

const ChatContent: React.FC<ChatContentProps> = ({ selectedContact, messages }) => {

  return (
    <div className='chat-messages'>
      {messages.map((message, index) => (
        <div className={`bubble ${message.sender}-bubble`} key={index}>
          {message.message}
          <span>{new Date().toLocaleTimeString()}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatContent
