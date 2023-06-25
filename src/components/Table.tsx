import menone from '../images//menone.svg';
import mentwo from '../images//mentwo.svg';
import girlone from '../images//girlone.svg';
import girltwo from '../images//girltwo.svg';
import { useState } from 'react';

interface Data {
  image: string;
  user_name: string;
  level: number;
  blocked: boolean;
  delete: string;
}

const tableData: Data[] = [
  {
    image: menone,
    user_name: 'Chebakia',
    level: 11,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: mentwo,
    user_name: 'spicy',
    level: 10,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: girlone,
    user_name: 'Naughty7',
    level: 11,
    blocked: true,
    delete: 'REMOVE'
  },
  {
    image: girltwo,
    user_name: 'Pizahot',
    level: 12,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: mentwo,
    user_name: 'wingwong',
    level: 11,
    blocked: true,
    delete: 'REMOVE'
  },
  {
    image: menone,
    user_name: 'PAKESTO',
    level: 11,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: mentwo,
    user_name: 'Kingslayer',
    level: 10,
    blocked: true,
    delete: 'REMOVE'
  },
  {
    image: girlone,
    user_name: 'L3arbi',
    level: 11,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: girltwo,
    user_name: 'gameover',
    level: 12,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: mentwo,
    user_name: 'hamidox',
    level: 13,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: menone,
    user_name: 'Omar77',
    level: 11,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: mentwo,
    user_name: 'Tarazan',
    level: 10,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: girlone,
    user_name: 'Spidergirl',
    level: 11,
    blocked: true,
    delete: 'REMOVE'
  },
  {
    image: girltwo,
    user_name: 'Pizahot',
    level: 12,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: mentwo,
    user_name: 'Yingyang',
    level: 11,
    blocked: true,
    delete: 'REMOVE'
  },
  {
    image: menone,
    user_name: 'PAKESTO',
    level: 11,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: mentwo,
    user_name: 'Thief',
    level: 10,
    blocked: true,
    delete: 'REMOVE'
  },
  {
    image: girlone,
    user_name: 'Wahassan',
    level: 11,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: girltwo,
    user_name: 'gamelover',
    level: 12,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: mentwo,
    user_name: 'hamidox',
    level: 13,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: menone,
    user_name: 'Tmira',
    level: 11,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: mentwo,
    user_name: 'Salty',
    level: 10,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: girlone,
    user_name: 'James007',
    level: 11,
    blocked: true,
    delete: 'REMOVE'
  },
  {
    image: girltwo,
    user_name: 'Aicha',
    level: 12,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: mentwo,
    user_name: 'Chinatown',
    level: 11,
    blocked: true,
    delete: 'REMOVE'
  },
  {
    image: menone,
    user_name: 'PAKESTO',
    level: 11,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: mentwo,
    user_name: 'Kingslayer',
    level: 10,
    blocked: true,
    delete: 'REMOVE'
  },
  {
    image: girlone,
    user_name: 'L3arbi',
    level: 11,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: girltwo,
    user_name: 'gameover',
    level: 12,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: mentwo,
    user_name: 'hamidox',
    level: 13,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: menone,
    user_name: 'Chebakia',
    level: 11,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: mentwo,
    user_name: 'spicy',
    level: 10,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: girlone,
    user_name: 'Naughty7',
    level: 11,
    blocked: true,
    delete: 'REMOVE'
  },
  {
    image: girltwo,
    user_name: 'Pizahot',
    level: 12,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: mentwo,
    user_name: 'wingwong',
    level: 11,
    blocked: true,
    delete: 'REMOVE'
  },
  {
    image: menone,
    user_name: 'PAKESTO',
    level: 11,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: mentwo,
    user_name: 'Kingslayer',
    level: 10,
    blocked: true,
    delete: 'REMOVE'
  },
  {
    image: girlone,
    user_name: 'L3arbi',
    level: 11,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: girltwo,
    user_name: 'gameover',
    level: 12,
    blocked: false,
    delete: 'REMOVE'
  },
  {
    image: mentwo,
    user_name: 'hamidox',
    level: 13,
    blocked: false,
    delete: 'REMOVE'
  },
]


const Table = () => {
  const [search, setSearch] = useState('');

  return (
    <div className='TableComponent'>
      <div className="title">
        <div className="header">
          <h1>Friend List</h1>
        </div>
        <input 
        onChange={(e) => setSearch(e.target.value)} 
        type='text' placeholder='Filter Name Players . . .' 
        />
      </div>
      <div className="columns">
        <p>#</p>
        <p>USERNAME</p>
        <p>LVL</p>
        <p>BLOCKED</p>
        <p>DELETE</p>
      </div>
      <div className="rows">
        {tableData.filter((player) => {
          return search.toLocaleLowerCase() === '' ? 
          player : 
          player.user_name.toLowerCase().includes(search)
        }).map((row, i) => (
          <div className="row" key={i}>
            <div className="avatar">
              <img src={row.image} alt="avatar" />
            </div>
            <div className="username">
              <p>{row.user_name}</p>
            </div>
            <div className="level">
              <p>{row.level}</p>
            </div>
            <div className="blocked">
              <label className="switch">
                <input type="checkbox" />
                  <span>
                    <em></em>
                    <strong></strong>
                 </span>
              </label>
            </div>
            <div className="delete">
              <button>
                <span>{row.delete}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table
