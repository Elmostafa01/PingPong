import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";


const ChatFooter: React.FC = () => {
  return (
    <div className='chat-footer'>
      <div className="input-field">
        <form action="">
          <div className="input">
            <input type="text" placeholder='Type Something Here...'/>
          </div>
          <button type='submit'>
              <RiSendPlaneFill style={{transform: 'scale(1.2'}} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatFooter
