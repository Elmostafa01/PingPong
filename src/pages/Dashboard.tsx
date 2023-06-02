import YourLastMatch from '../components/YourLastMatch'
import OnlineFriends from '../components/OnlineFriends'
import Statistic from '../components/Statistic'
import Rank from '../components/Rank'
import RankedGame from '../components/RankedGame'



const Dashboard = () => {
  return (
    <div className='dashboard'>
      <YourLastMatch />
      <OnlineFriends />
      <Statistic />
      <Rank />
      <RankedGame />
    </div>
  )
}

export default Dashboard
