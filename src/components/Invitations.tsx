import menone from '../images/menone.svg';
import mentwo from '../images/mentwo.svg';
import girlone from '../images/girlone.svg';
import girltwo from '../images/girltwo.svg';
import validation from '../images/valid.svg';
import decline from '../images/decline.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useInvitations from '../hooks/useInvitation';
import toast, { Toaster } from 'react-hot-toast';


interface Invitation {
  image: string;
  name: string;
  level: number;
  validation: string;
  decline: string;
}

const invitationData: Invitation[] = [
  {
    image: menone,
    name: '3ZAWI',
    level: 11,
    validation: validation,
    decline: decline
  },
  {
    image: mentwo,
    name: 'KHALID',
    level: 10,
    validation: validation,
    decline: decline
  },
  {
    image: girlone,
    name: 'AYA42',
    level: 11,
    validation: validation,
    decline: decline
  },
  {
    image: girltwo,
    name: 'ZIZI0',
    level: 12,
    validation: validation,
    decline: decline
  },
  {
    image: mentwo,
    name: 'Mokar',
    level: 11,
    validation: validation,
    decline: decline
  },
  {
    image: menone,
    name: 'PAKESTO',
    level: 11,
    validation: validation,
    decline: decline
  },
  {
    image: mentwo,
    name: 'HAMZA',
    level: 10,
    validation: validation,
    decline: decline
  },
  {
    image: girlone,
    name: 'BLACKROSE',
    level: 11,
    validation: validation,
    decline: decline
  },
  {
    image: girltwo,
    name: 'OVERXO',
    level: 12,
    validation: validation,
    decline: decline
  },
  {
    image: mentwo,
    name: 'SBIXLA',
    level: 13,
    validation: validation,
    decline: decline
  },
];

const Invitations = () => {
  const { invitations, handleValidationClick } = useInvitations(invitationData);
  const [disapear, setDisapear] = useState<boolean>();

const  handleAnimation = () => {
    setDisapear(!disapear)
  }

  const toastAppearValidated = (name: string) => {
    toast.success(`You just have Accepted ${name}`, { 
      position: 'top-center',
      duration: 3000,
      iconTheme: {
        primary: '#fff',
        secondary: '#1657FF',
      },
      style: {
        zIndex: '900',
        background: '#16DBCC',
        color: '#fff',
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '0.9rem',
      },
    });
  }

  const toastAppearDecline = (name: string) => {
    toast.success(`You just have Declined ${name}`, { 
      position: 'top-center',
      duration: 3000,
      iconTheme: {
        primary: '#fff',
        secondary: '#1657FF',
      },
      style: {
        zIndex: '900',
        background: '#FF5A5A',
        color: '#fff',
        boxShadow: '0 0 2px rgba(0, 0, 0, 0.1)',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '0.9rem',
      },
    });
  }

  return (
    <div className='invitations'>
      <div className="title">
        <h1>Invitations</h1>
      </div>
      <div className="inv-list">
        {invitations.map((demand, i) => (
          <div className="demand" key={i}>
            <div className="content">
              <div className="avatar">
                <Link to='/profil/opponent'>
                  <img src={demand.image} alt="avatar" />
                </Link>
              </div>
              <div className="name-level">
                <p className='name'>{demand.name}</p>
                <p className='lvl'>LVL {demand.level}</p>
              </div>
            </div>
            <div className="accept-decline">
              <button
                className="validation"
                onClick={() => {
                  handleValidationClick(i),
                  handleAnimation(),
                  toastAppearValidated(demand.name)
                }}>
                <img src={demand.validation} alt="valid-demand" />
              </button>
              <button
                className="decline" 
                onClick={() => {
                  handleValidationClick(i),
                  handleAnimation()
                  toastAppearDecline(demand.name)
                }}>
                <img src={demand.decline} alt="decline demand" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Invitations;