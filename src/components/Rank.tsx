import React from 'react'
import rectangle from '../images/rectangle.svg';
import arrowtop from '../images/arrowTop.svg';
import arrowtoptwo from '../images/arrowTopTwo.svg';
import blackrectangle from '../images/blackrectangle.svg';



const Rank = () => {
  return (
    <div className='Rank'>
      <div className="title"><h3>✨Rank✨</h3></div>
        <div className="rankWrapper">
        <div className="rank-one">
            <p>Rank<span className='rankNumber'>#1</span></p>
            <div className="player">
              <span className='playerName'>AYA11</span>
              <img src={arrowtop} height={25}/>
            </div>
            <div className="rectangle">
              <img src={rectangle} alt='svg'  />
            </div>
        </div>
        <div className="rank-two">
        <p>Rank<span className='rankNumber'>#2</span></p>
            <div className="player">
              <span className='playerName'>ISSAM</span>
              <img src={arrowtop} height={25}/>
            </div>
            <div className="rectangle">
              <img src={arrowtoptwo} alt='svg'  />
            </div>
        </div>
        <div className="rank-three">
        <p>Rank<span className='rankNumber'>#3</span></p>
            <div className="player">
              <span className='playerName'>OUSSAMA06</span>
              <img src={arrowtop} height={25}/>
            </div>
            <div className="rectangle">
              <img src={blackrectangle} alt='svg' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Rank
