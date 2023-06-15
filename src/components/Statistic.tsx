import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    month: 'January',
    timeSpent: '3h',
    matchPlayed: 8
  },
  {
    month: 'February',
    timeSpent: '2h',
    matchPlayed: 6
  },
  {
    month: 'March',
    timeSpent: '4h',
    matchPlayed: 11
  },
  {
    month: 'April',
    timeSpent: '2h',
    matchPlayed: 5
  },
  {
    month: 'May',
    timeSpent: '3h',
    matchPlayed: 8
  },
  {
    month: 'June',
    timeSpent: '4h',
    matchPlayed: 13
  },
  {
    month: 'July',
    timeSpent: '2h',
    matchPlayed: 7
  },
  {
    month: 'August',
    timeSpent: '1h',
    matchPlayed: 4
  },
  {
    month: 'September',
    timeSpent: '4h',
    matchPlayed: 13
  },
  {
    month: 'October',
    timeSpent: '1h',
    matchPlayed: 3
  },
  {
    month: 'November',
    timeSpent: '3h',
    matchPlayed: 8
  },
  {
    month: 'December',
    timeSpent: '2h',
    matchPlayed: 6
  },
]

const Statistic = () => {
  return (
    <div className='Statistic'>
      <div className="title">✨Statistic✨</div>
      <div className="statistic-wrapper">
        <div className="winrate">
          <h1>Games Winrate</h1>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div className="number">
                  23 Wins 
                  <span className='percent'>75%</span>
                </div>
              </div>
            </div>
            <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
            <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#1657FF" />
               <stop offset="100%" stop-color="#5D73FA" />
            </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
          </svg> 
            </div>
          </div>
        </div>
        <div className="loggedin">
          <div className="time">
            <h1>Time Logged In</h1>
          </div>
        <ResponsiveContainer  width="100%" height="80%">
        <BarChart 
          width={280}
          height={300}
          data={data}
          margin={{
            top: 70,
            right: 20,
            left: -20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="month" />
          <YAxis dataKey='matchPlayed' />
          <Tooltip />
          <Legend />
          <Bar  dataKey="timeSpent" stackId="a" fill="#EFF3FF" />
          <Bar dataKey="matchPlayed" stackId="a" fill="#1957FF" />
        </BarChart>
      </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Statistic
