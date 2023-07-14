import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const PieChart: React.FC = () => {
const data = {
    labels: ['Games Play','Games Lost'],
    datasets: [{
        label: 'games',
        data: [23, 6],
        backgroundColor: ['#1657FF','#EFF3FE'],
        borderColor: ['#1657FF', '#EFF3FE'],
        borderWidth: [
            3,
            0
        ],
        borderRadius: [
            10, 
            5, 
          ],
    }]
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    
}

  return (
    <div className='PieChart'>
      <Doughnut
        data={data}
        options={options}
      >
      </Doughnut>
    </div>
  )
}

export default PieChart
