import React from 'react'
import { player1 } from '../data/gameHistoryData';
import girlone from '../images/girlone.svg';
import menone from '../images/menone.svg';



const cardData = [
  { id: 1, user: 'Player 1', date: new Date(2023, 5, 14) },
  { id: 2, user: 'Player 2', date: new Date(2023, 5, 15) },
  { id: 3, user: 'Player 1', date: new Date(2023, 5, 16) },
  { id: 4, user: 'Player 2', date: new Date(2023, 5, 17) },
  { id: 5, user: 'Player 1', date: new Date(2023, 5, 18) },
  { id: 6, user: 'Player 2', date: new Date(2023, 5, 19) },
  { id: 7, user: 'Player 1', date: new Date(2023, 5, 20) },
  { id: 8, user: 'Player 2', date: new Date(2023, 5, 11) },
  { id: 9, user: 'Player 1', date: new Date(2023, 5, 22) },
  { id: 10, user: 'Player 2', date: new Date(2023, 5, 23) },
];

const HistoryOpponent: React.FC = () => {
  return (
    <div className='history-opp'>
      <h1>History</h1>
      <div className="cards">
        {cardData.map((card) => (
            <div key={card.id} className="card">
              <div className="date">
                {card.date.toDateString()}
              </div>
              <div className="content">
                <div className="leftPlayer">
                  <div className="player-title">
                    <span className='playerName'>Player1</span>
                    <span className='playerRank'>Silver</span>
                  </div>
                  <div className="avatar">
                    <img src={girlone} alt="" height={50}/>
                  </div>
                  <div className="score">
                    7
                  </div>
                </div>
                <div className="vs">
                  <span></span>
                  <span></span>
                </div>
                <div className="rightPlayer">
                  <div className="player-title">
                    <span className='playerName'>Player2</span>
                    <span className='playerRank'>Gold</span>
                  </div>
                  <div className="avatar">
                    <img src={menone} alt="" />
                  </div>
                  <div className="score">
                    11
                  </div>
                </div>
              </div>
              <div className="left">
                {player1.winHistory ?
                (<span>WIN</span>) 
                :(<span style={{background: 'red', height: '100%', width: '100%', display: 'flex',alignItems: 'center',justifyContent: 'center'}}>LOSE</span>)
                }
              </div>
              <div className="right">
              {!player1.winHistory ?
                (<span>WIN</span>) 
                :(<span style={{background: 'red', height: '100%', width: '100%', display: 'flex',alignItems: 'center',justifyContent: 'center'}}>LOSE</span>)
                }
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default HistoryOpponent
