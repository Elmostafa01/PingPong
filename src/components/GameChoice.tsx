import plus from '../images/plus.svg'
import playersymbole from '../images/playersymbol.svg'
import { useState } from 'react';

interface GameChoiceProps {
  gameName: string;
  handleClose: () => void;
}

const GameChoice: React.FC<GameChoiceProps> = ({gameName, handleClose}) => {
    const back = '<'

    const [gameAccepted, setGameAccepted] = useState<boolean>(false);
    const [inputClear, setInputClear] = useState('')

    const handleChange = (event:any) => {
      setInputClear(event.target.value);
    };

    const clearField = () => {
      setInputClear("")
    }

  return (
    <div className='gameChoice'>
      <div className="header">
        <p>{gameName}</p>
      </div>
      <div className="content">
        <div className="input">
            <input 
            type="text" 
            placeholder='invite a friend'
            value={inputClear}
            onChange={handleChange} />
            <button onClick={() => {setGameAccepted(!gameAccepted), clearField()}}>
                <img src={plus} />
            </button>
        </div>
        <div className="line">
          <span>&</span>
        </div>
        <div className="gameisready">
        <button
          style={{boxShadow: gameAccepted ? '0 10px 30px greenyellow' : '',
          backgroundColor: gameAccepted ? 'greenyellow' : 'red'}}
          className='play'>
            <img src={playersymbole} />
            Play
        </button>
            <div className="tip" >
                {gameAccepted ? (<p>Waiting for Acceptation request to start the game . . .</p>) : 'Invite Someone to Play with'}
            </div>
            <div className="goback">
                <button onClick={handleClose}>
                    <p>{back}</p>
                    <span>Go Back</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default GameChoice
