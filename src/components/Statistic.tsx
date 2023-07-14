import React from 'react';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { data } from '../data/chartData';
import PieChart from '../components/PieChart';

const Statistic: React.FC = () => {
  const CustomBar = (props: any) => {
    const { x, y, width, height } = props;

    return (
      <g>
        <rect x={x} y={y} width={width} height={height} fill={props.fill} rx={5} ry={5} />
      </g>
    );
  };

  return (
    <div className="Statistic">
      <div className="title">✨Statistic✨</div>
      <div className="statistic-wrapper">
        <div className="winrate">
          <h1>Games Winrate</h1>
          <p>
            23 Wins<span>{`(70%)`}</span>
          </p>
          <PieChart />
        </div>
        <div className="loggedin">
          <div className="time">
            <h1>Time Logged In</h1>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{
                top: 70,
                right: 20,
                left: -20,
                bottom: 0,
              }}
            >
              <XAxis dataKey="month" />
              <YAxis dataKey="matchPlayed" />
              <Tooltip />
              <Legend />
              <Bar dataKey="matchPlayed" stackId="a" fill="#1957FF" shape={<CustomBar />} barSize={5} />
              <Bar dataKey="timeSpent" stackId="a" fill="#BACCFD" shape={<CustomBar />} barSize={5}  />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
