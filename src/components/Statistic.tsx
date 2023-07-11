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
