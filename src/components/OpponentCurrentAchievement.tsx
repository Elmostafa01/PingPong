import Gold from '../images/achievements/3-gold.svg'

const OpponentCurrentAchievement = () => {
  return (
    <div className='current-achievement'>
      <div className="header">
        <p>current achievement</p>
      </div>
      <div className="achievement">
        <div className="symbol">
          <img src={Gold} alt="rank-symbol" />
        </div>
        <div className="symbol-text">
          <div className="title">
            <span>Gold!</span>
          </div>
          <div className="text">
            <p>
            Congratulations, Ping Pong Realm Gold!
Unmatched skills, prestigious title.
Extraordinary achievement!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpponentCurrentAchievement
