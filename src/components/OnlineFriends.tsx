import menone from '../images/menone.svg'
import mentwo from '../images/mentwo.svg'
import girone from '../images/girlone.svg'
import girltwo from '../images/girltwo.svg'
import sendchat from '../images/sendchat.svg'

interface contacts {
  name: string;
  statut: string;
  image: string;
}

const friendsData: contacts[] = [
  {
    name: 'Zetrix',
    statut: 'In Game',
    image: mentwo,
  },
  {
    name: 'Nobles',
    statut: 'In Game',
    image: girltwo,
  },
  {
    name: 'Bilal',
    statut: 'Free',
    image: menone,
  },
  {
    name: 'Phoenix',
    statut: 'In Game',
    image: girone,
  },
  {
    name: 'Phen',
    statut: 'Free',
    image: menone,
  },
  {
    name: 'Salah',
    statut: 'Free',
    image: mentwo,
  },
  {
    name: 'Khalid',
    statut: 'Free',
    image: menone,
  },
  {
    name: 'Craziman',
    statut: 'In Game',
    image: mentwo,
  },
  {
    name: 'Tofaha',
    statut: 'Free',
    image: girone,
  },
  {
    name: 'Ohio',
    statut: 'In Game',
    image: mentwo,
  },
  {
    name: 'Strawberry',
    statut: 'In Game',
    image: girltwo,
  },
  {
    name: 'Numnum',
    statut: 'Free',
    image: menone,
  },
]

const OnlineFriends = () => {
  return (
    <div className='OnlineFriends'>
      <div className="title">
        <h3>✨Friends✨</h3>
      </div>
      <div className="cards-wrapper">
        {friendsData ? 
        (friendsData.map((card, i) => (
            <div className="card-friend" key={i}>
              <div className="friend">
                <div className="avatar">
                  <span className={friendsData[1] ? 'online' : 'occupied'}></span>
                  <img src={card.image} alt='friend image' height={60} />
                </div>
                <div className="card-name">
                  <span className='name'>{card.name}</span>
                  <span className='ingame'>{card.statut}</span>
                </div>
              </div>
              <div className="send-msg">
                <input type="text" placeholder='Send a Msg . . .'/>
                <div className="sendchat">
                  <button>
                  <img src={sendchat} alt="send chat" />
                  </button>
                </div>
              </div>
            </div>
            ))
        ):
        (<p className='friends-off'>No Friend Online</p>)}
      </div>
    </div>
  )
}

export default OnlineFriends
