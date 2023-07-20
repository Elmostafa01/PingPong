import plus from '../images/plus.svg'
import playersymbole from '../images/playersymbol.svg'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


interface GameChoiceProps {
  gameName: string;
  handleClose: () => void;
}

const GameChoice: React.FC<GameChoiceProps> = ({gameName, handleClose}) => {
    const back = '<'
    const [gameAccepted, setGameAccepted] = useState<boolean>(false);
    const [inputClear, setInputClear] = useState('')

    const handleChange = (event: any) => {
      const inputValue = event.target.value;
      setInputClear(inputValue);
      if (inputValue.trim() === '') {
        setGameAccepted(false);
      }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        setGameAccepted(!gameAccepted);
        clearField();
        toastAppearValidated()
      }
    };

    const clearField = () => {
      setInputClear("")
    }

    const toastAppearValidated = () => {
      if (inputClear.trim() === '') {
        toast.error('Please enter a valid name before sending an invitation.', {
          position: 'top-center',
          duration: 2000,
          style: {
            zIndex: '900',
            background: '#FF5A5A',
            color: '#fff',
            boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.9rem',
          },
        });
      } else {
          toast.success('Waiting For Player Acceptation', {
            position: 'top-center',
            duration: 3000,
            style: {
              zIndex: '900',
              background: '#fff',
              color: '#222',
              boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.9rem',
            },
          });
        
      }
    }
    

  return (
    <div className='gameChoice'>
      <Toaster />
      <div className="header">
        <p>{gameName}</p>
      </div>
      <div className="content">
        <div className="input">
        <input
            type="text"
            placeholder='invite a friend'
            value={inputClear}
            onChange={handleChange}
            onKeyPress={handleKeyPress} // Corrected placement of onKeyPress event
          />
            <button className='plus' onClick={() => {
              setGameAccepted(!gameAccepted),
               clearField(),
               toastAppearValidated()
               }}>
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
