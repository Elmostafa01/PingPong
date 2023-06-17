import iron from '../images/achievements/0-iron.svg'
import bronze from '../images/achievements/1-bronze.svg'
import silver from '../images/achievements/2-silver.svg'
import gold from '../images/achievements/3-gold.svg'
import plat from '../images/achievements/4-plat.svg'
import diamond from '../images/achievements/5-diamond.svg'
import knight from '../images/achievements/6-knight.svg'
import goldenknight from '../images/achievements/7-goldenknight.svg'
import master from '../images/achievements/8-master.svg'
import challenger from '../images/achievements/9-challenger.svg'

interface Achievement {
  image: string;
  title: string;
  text: string;
}

const achievementsData: Achievement[] = [
  {
    image: iron,
    title: 'Iron',
    text: 'Triumph as iron, conquer with fire. Rise, overcome, aspire higher.'
  },
  {
    image: bronze,
    title: 'Bronze',
    text: 'Reaching the bronze title requires dedication, skill, and perseverance. It signifies progress, growth, and a step closer to greatness'
  },
  {
    image: silver,
    title: 'Silver',
    text: 'Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.'
  },
  {
    image: gold,
    title: 'Gold',
    text: 'Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.'
  },
  {
    image: plat,
    title: 'Platinuim',
    text: 'Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.'
  },
  {
    image: diamond,
    title: 'Diamond',
    text: 'Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.'
  },
  {
    image: knight,
    title: 'Knight',
    text: 'Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.'
  },
  {
    image: goldenknight,
    title: 'Golden-Knight',
    text: 'Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.'
  },
  {
    image: master,
    title: 'Master',
    text: 'Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.'
  },
  {
    image: challenger,
    title: 'Faker',
    text: 'Lorem Ipsum lorepator who desiorel mundo la cupa dilaperva mostafaesti mulaca abepsum dolerum casa.'
    },
]

const Achievements = () => {

  return (
  <div className='achievements'>
    {achievementsData.map((achievement, index) => (
        <div className="achievement" key={index}>
          <div className="symbol">
            <img src={achievement.image} alt="rank-symbol" />
          </div>
          <div className="symbol-text">
            <div className="title">
              <span>{achievement.title}</span>
            </div>
            <div className="text">
              <p>{achievement.text}</p>
            </div>
          </div>
        </div>
      ))}
  </div>
  )
}

export default Achievements
