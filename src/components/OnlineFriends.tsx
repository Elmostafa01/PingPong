import menone from '../images/menone.svg'
import mentwo from '../images/mentwo.svg'
import girone from '../images/girlone.svg'
import girltwo from '../images/girltwo.svg'
import sendchat from '../images/sendchat.svg'


const OnlineFriends = () => {
  return (
    <div className='OnlineFriends'>
      <div className="title"><h3>✨Friends✨</h3></div>
      <div className="cards-wrapper">
        <div className="card-friend">
          <div className="friend">
            <div className="avatar">
              <span className='online'></span>
              <img src={mentwo} alt='friend image' height={60} />
            </div>
            <div className="card-name">
              <span className='name'>Zetrix</span>
              <span className='ingame'>In Game</span>
            </div>
          </div>
          <div className="send-msg">
            <input type="text" placeholder='Send a Msg...'/>
            <div className="sendchat">
              <img src={sendchat} alt="chat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnlineFriends
