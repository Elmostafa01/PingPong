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
    text: 'Strive for silver, let determination shine bright. Climb the ladder, embrace the fight.'
  },
  {
    image: gold,
    title: 'Gold',
    text: 'Forge a path to gold, let resilience be your guide. Unleash your potential, reach the other side.'
  },
  {
    image: plat,
    title: 'Platinuim',
    text: 'Aim for platinum, let excellence lead the way. Embrace challenges, make progress every day.'
  },
  {
    image: diamond,
    title: 'Diamond',
    text: 'Ascend to diamond, let perseverance define. Unleash your skills, surpass boundaries with a shine.'
  },
  {
    image: knight,
    title: 'Knight',
    text: 'Become a knight, let valor be your might. Courageously advance, championing what is right.'
  },
  {
    image: goldenknight,
    title: 'Golden-Knight',
    text: 'Rise as a golden knight, let glory crown your quest. Unyielding spirit, stand above the rest.'
  },
  {
    image: master,
    title: 'Master',
    text: 'Master the art, let expertise be your reign. Unleash your wisdom, leave an indelible stain.'
  },
  {
    image: challenger,
    title: 'Faker',
    text: 'Congratulations, Ping Pong Realm Faker! Unmatched skills, prestigious title. Extraordinary achievement!'
    },
]

const Achievements = () => {

  return (
  <div className='achievements'>
    <h1>Achievement</h1>
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
