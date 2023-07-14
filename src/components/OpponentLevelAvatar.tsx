import mentwo from '../images/mentwo.svg'

const OpponentLevelAvatar = () => {
  const statut = {
    level: 10,
    username: 'Doopa',
    rank: 'Gold'
  };

  return (
    <div className='level-avatar'>
      <div className="level">
        <span>LVL {statut.level}</span>
      </div>
      <div className="avatar">
        <img src={mentwo} alt="avatar" />
      </div>
      <div className="labels">
        <div className="name">
          <p>USERNAME</p>
          <span>{statut.username}</span>
        </div>
        <div className="rank">
          <p>RANK</p>
          <span>{statut.rank}</span>
        </div>
      </div>
    </div>
  )
}

export default OpponentLevelAvatar
