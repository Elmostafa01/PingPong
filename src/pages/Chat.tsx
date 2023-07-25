import menone from '../images/menone.svg';
import mentwo from '../images/mentwo.svg';
import girone from '../images/girlone.svg';
import girltwo from '../images/girltwo.svg';
import { FiSearch } from "react-icons/fi";
import { BsCheckAll } from "react-icons/bs";
import { useState } from 'react';
import ChatHeader from '../components/ChatHeader';
import ChatFooter from '../components/ChatFooter';
import ChatContent from '../components/ChatContent';


interface Contact {
  name: string;
  lastMsg: string;
  image: string;
  message: string;
  msgNumber: number;
}

const allFriendsData: Contact[] = [
  {
    name: 'Zetrix',
    lastMsg: 'Hi, Och ba9i katghani ?',
    image: mentwo,
    message: '',
    msgNumber: 2
  },
  {
    name: 'Nobles',
    lastMsg: 'Looking for some help !! Anyone! , im stuck in this elohell and i dont know what to do !! ',
    image: girltwo,
    message: '',
    msgNumber: 2
  },
  {
    name: 'Bilal',
    lastMsg: 'Are You still aLive ?',
    image: menone,
    message: '',
    msgNumber: 0,
  },
  {
    name: 'Phoenix',
    lastMsg: 'Selling New Car , check this beauty with turbo and Akrapovic exaust',
    image: girone,
    message: '',
    msgNumber: 5
  },
  {
    name: 'Phen',
    lastMsg: 'How are you today ?',
    image: menone,
    message: '',
    msgNumber: 0,
  },
  {
    name: 'Salah',
    lastMsg: 'Hi, Are u There ?',
    image: mentwo,
    message: '',
    msgNumber: 0,
  },
  {
    name: 'Khalid',
    lastMsg: 'Going to Help you with new Products',
    image: menone,
    message: '',
    msgNumber: 0,
  },
  {
    name: 'Craziman',
    lastMsg: 'Waaaaa khuna !!',
    image: mentwo,
    message: '',
    msgNumber: 4,
  },
  {
    name: 'Tofaha',
    lastMsg: 'Bonne nuit , siri dwi m3aha :)',
    image: girone,
    message: '',
    msgNumber: 3,
  },
  {
    name: 'Ohio',
    lastMsg: 'ghabarti a sahbi !',
    image: mentwo,
    message: '',
    msgNumber: 0,
  },
  {
    name: 'Strawberry',
    lastMsg: 'wtf !??',
    image: girltwo,
    message: '',
    msgNumber: 0,
  },
  {
    name: 'Numnum',
    lastMsg: 'badalti numero ?',
    image: menone,
    message: '',
    msgNumber: 1
  },
];

let msgUnreadTotal = 0;

for (const unread of allFriendsData) {
  msgUnreadTotal += unread.msgNumber
}
console.log(msgUnreadTotal)

const Chat = () => {
  const [players, setPlayers] = useState<Contact[]>(allFriendsData)
  const [search, setSearch] = useState('');

  return (
    <div className='chat'>
      <div className="wrapper">
        <div className="chat-contact">
          <div className="header">
            <div className="chats">
              <p>Chats</p>
              <span>{msgUnreadTotal}</span>
            </div>
          </div>
          <div className="searchbar">
            <FiSearch className='search-tool' />
            <input 
              onChange={(e) => setSearch(e.target.value)}
              type='text'
              placeholder='Filter Name Players . . .'
            />
          </div>
          <div className="contacts-list">
            {players.filter((player) =>
              search.toLocaleLowerCase() === ''? player
              : player.name.toLowerCase().includes(search)
            )
            .map((contact, i) => (
              <div className="contact" key={i}>
                <div className="avatar">
                  <img src={contact.image} alt="" />
                </div>
                <div className="right-labels">
                  <div className="name-label">
                    <div className="name">{contact.name}</div>
                    <p>11:15 AM</p>
                  </div>
                  <div className="msg-label">
                    <div className="last-msg">
                      <BsCheckAll style={{
                        display: contact.msgNumber <= 0 ? 'inline-block' : 'none',
                        fontSize: '1.2rem',
                        transform: 'translateY(5px)',
                        padding: '0 2px'
                        }} />
                      {contact.lastMsg}
                    </div>
                    <span style={{background: contact.msgNumber == 0 ? 'transparent' : ''}}>
                      {contact.msgNumber == 0 ? '' : contact.msgNumber}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="chat-conversation">
          <ChatHeader />
          <ChatContent />
          <ChatFooter />             
        </div>
      </div>
    </div>
  )
}

export default Chat
