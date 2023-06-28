import React from 'react'

interface PingPongGameProps {
    handleClose: () => void;
  }
  
  const PingPongGame: React.FC<PingPongGameProps> = ({ handleClose }) => {
    const back = '<'

    return (
      <div className="ping-pong-game">
        <div className="gameboard">
            <div className="data-scores">
                <p>Player: 0</p>
                <p>Round: 0</p>
                <p>BOT: 0</p>
            </div>
            <div className="game-paddles">
                <div className="ball"></div>
                <div className="left-paddle"></div>
                <div className="right-paddle"></div>
            </div>
        </div>
        <div className="btn">
            <button style={{outline: '0', border: '0',
             backgroundColor:'#7A9BF8', height: '30px',
            width: '100px', marginTop: '5px', borderRadius: '30px',
            color: '#fff',fontFamily: "Poppins', sans-serif",fontWeight:'700', cursor: 'pointer',
            fontSize: '0.9em',
            }}>
            Start
            </button>

            <button style={{display:'flex',alignItems: 'center',justifyContent: 'center',outline: '0', border: '0',
             backgroundColor:'#7A9BF8', height: '30px',
            width: '100px', marginTop: '5px', borderRadius: '30px',
            color: '#fff',fontFamily: "Poppins', sans-serif",fontWeight:'700', cursor: 'pointer',
            fontSize: '0.9em',
            }}
             className='close' onClick={handleClose}>
                <span>Go Back</span>
            </button> 
        </div>
      </div>
    );
  };
  
  export default PingPongGame;
  