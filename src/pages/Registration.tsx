import React from 'react';
import leftimage from '../images/backgrounds/img-3.png';
import menone from '../images/icons/m-1.png';
import mentwo from '../images/icons/m-2.png';
import girlone from '../images/icons/g-1.png';
import girltwo from '../images/icons/g-2.png'

interface image {
  image: string;
  id: number;
}

const images: image[] = [
  {
    image: menone,
    id: 1,
  },
  {
    image: mentwo,
    id: 2,
  },
  {
    image: girlone,
    id: 3,
  },
  {
    image: girltwo,
    id: 4,
  }
]


const Registration: React.FC = () => {
  return (
    <div className='Registration'>
      <div className="register-component">
        <div className="hero-img">
          <img src={leftimage} />
        </div>
        <div className="user-choice">
          <div className="text">
            <p>Hey,</p>
            <p>let's get you started</p>
            <p>choose your avatar</p>
          </div>
          <div className="icons">
            <ul>
              {images.map((image) => (
                <li>
                  <img height={40} src={image.image} alt="`${image.id}`" />
                </li>
              ))}
            </ul>
          </div>
          <div className="enter-username">
            <input type="text" placeholder='username'/>
            <button>register</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Registration
