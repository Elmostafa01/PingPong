import React from 'react'
import intraimg from '../images/42_Logo 1.png'

const Intra: React.FC = () => {
  return (
    <div className='Intra-comp'>
      <button>
        <img src={intraimg} />
        <span></span>
        <p>Intra</p>
      </button>
    </div>
  )
}

export default Intra
