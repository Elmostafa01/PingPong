import menone from '../images//menone.svg';
import mentwo from '../images//mentwo.svg';
import girlone from '../images//girlone.svg';
import girltwo from '../images//girltwo.svg';
import validation from '../images/valid.svg';
import decline from '../images/decline.svg';

interface invitation {
  image: string;
  name: string;
  level: number;
  validation: string;
  decline: string;
}

const invitationData: invitation[] = [
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
  
]

const Invitations = () => {
  return (
    <div className='invitations'>
      <div className="title">
        <h1>Invitations</h1>
      </div>
      <div className="inv-list">
        {invitationData.map((demand, i) => (
          <div className="demand" key={i}>
            <div className="content">
              <div className="avatar">
                <img src={demand.image} alt="avatar" />
              </div>
              <div className="name-level">
                <p className='name'>{demand.name}</p>
                <p className='lvl'>LVL {demand.level}</p>
              </div>
            </div>
            <div className="accept-decline">
              <button className="validation">
                <img src={demand.validation} alt="valid-demand" />
              </button>
              <button className="decline">
                <img src={demand.decline} alt="decline demand" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Invitations
